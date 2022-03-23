import { __decorate, __param } from 'tslib';
import { Inject, Injectable, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter, Output, Pipe, NgModule } from '@angular/core';
import { Subject, from } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * Toast style.
 */
var SnotifyStyle;
(function (SnotifyStyle) {
    SnotifyStyle["simple"] = "simple";
    SnotifyStyle["success"] = "success";
    SnotifyStyle["error"] = "error";
    SnotifyStyle["warning"] = "warning";
    SnotifyStyle["info"] = "info";
    SnotifyStyle["async"] = "async";
    SnotifyStyle["confirm"] = "confirm";
    SnotifyStyle["prompt"] = "prompt";
})(SnotifyStyle || (SnotifyStyle = {}));

/**
 * Transform arguments to Snotify object
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns Snotify
 */
function TransformArgument(target, propertyKey, descriptor) {
    if (propertyKey === SnotifyStyle.async) {
        return {
            value(...args) {
                let result;
                if (args.length === 2) {
                    result = {
                        title: null,
                        body: args[0],
                        config: null,
                        action: args[1]
                    };
                }
                else if (args.length === 3) {
                    if (typeof args[1] === 'string') {
                        result = {
                            title: args[1],
                            body: args[0],
                            config: null,
                            action: args[2]
                        };
                    }
                    else {
                        result = {
                            title: null,
                            body: args[0],
                            config: args[2],
                            action: args[1]
                        };
                    }
                }
                else {
                    result = {
                        title: args[1],
                        body: args[0],
                        config: args[3],
                        action: args[2]
                    };
                }
                return descriptor.value.apply(this, [result]);
            }
        };
    }
    else {
        return {
            value(...args) {
                let result;
                if (args.length === 1) {
                    result = {
                        title: null,
                        body: args[0],
                        config: null
                    };
                }
                else if (args.length === 3) {
                    result = {
                        title: args[1],
                        body: args[0],
                        config: args[2]
                    };
                }
                else {
                    result = {
                        title: null,
                        config: null,
                        body: args[0],
                        [typeof args[1] === 'string' ? 'title' : 'config']: args[1]
                    };
                }
                return descriptor.value.apply(this, [result]);
            }
        };
    }
}

/**
 * Generates random id
 * @return number
 */
function uuid() {
    return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}
/**
 * Simple is object check.
 * @param item Object<any>
 * @returns boolean
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge objects.
 * @param sources Array<Object<any>>
 * @returns Object<any>
 */
function mergeDeep(...sources) {
    const target = {};
    if (!sources.length) {
        return target;
    }
    while (sources.length > 0) {
        const source = sources.shift();
        if (isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    target[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    }
    return target;
}
function animate(start, duration, callback) {
    let endTime;
    requestAnimationFrame(timestamp => (endTime = timestamp + duration));
    const calculate = () => {
        requestAnimationFrame(timestamp => {
            const runtime = timestamp - endTime;
            const progress = Math.min(runtime / duration, 1) + start;
            if (runtime < duration) {
                if (callback(+(100 * progress).toFixed(2), progress)) {
                    calculate();
                }
            }
        });
    };
}

/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
function SetToastType(target, propertyKey, descriptor) {
    return {
        value(...args) {
            args[0].config = Object.assign(Object.assign({}, args[0].config), { type: propertyKey });
            return descriptor.value.apply(this, args);
        }
    };
}

// @TODO remove method in observable way
/**
 * Toast main model
 */
class SnotifyToast {
    constructor(id, title, body, config) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.config = config;
        /**
         * Emits SnotifyEvent
         */
        this.eventEmitter = new Subject();
        /**
         * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
         */
        this.eventsHolder = [];
        if (this.config.type === SnotifyStyle.prompt) {
            this.value = '';
        }
        this.on('hidden', () => {
            this.eventsHolder.forEach((subscription) => {
                subscription.unsubscribe();
            });
        });
    }
    /**
     * Subscribe to toast events
     * @returns this
     * @param event SnotifyEvent
     * @param action (toast: this) => void
     */
    on(event, action) {
        this.eventsHolder.push(this.eventEmitter.subscribe((e) => {
            if (e === event) {
                action(this);
            }
        }));
        return this;
    }
    /**
     * Tests if a toast equals this toast.
     * @returns boolean true then equals else false.
     * @param toast SnotifyToast
     */
    equals(toast) {
        return this.body === toast.body && this.title === toast.title && this.config.type === toast.config.type;
    }
}

/**
 * SnotifyService - create, remove, config toasts
 */
let SnotifyService = 
// tslint:disable:unified-signatures
class SnotifyService {
    constructor(config) {
        this.config = config;
        this.emitter = new Subject();
        this.toastChanged = new Subject();
        this.toastDeleted = new Subject();
        this.notifications = [];
    }
    /**
     * emit changes in notifications array
     */
    emit() {
        this.emitter.next(this.notifications.slice());
    }
    /**
     * returns SnotifyToast object
     * @param id Number
     * @return SnotifyToast|undefined
     */
    get(id) {
        return this.notifications.find(toast => toast.id === id);
    }
    /**
     * add SnotifyToast to notifications array
     * @param toast SnotifyToast
     */
    add(toast) {
        if (this.config.global.filterDuplicates && this.containsToast(toast)) {
            return;
        }
        if (this.config.global.newOnTop) {
            this.notifications.unshift(toast);
        }
        else {
            this.notifications.push(toast);
        }
        this.emit();
    }
    /**
     * checks if the toast is in the collection.
     * @param inToast SnotifyToast
     * @returns boolean
     */
    containsToast(inToast) {
        return this.notifications.some(toast => toast.equals(inToast));
    }
    /**
     * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
     * @param id number
     * @param remove boolean
     */
    remove(id, remove) {
        if (!id) {
            return this.clear();
        }
        else if (remove) {
            this.notifications = this.notifications.filter(toast => toast.id !== id);
            return this.emit();
        }
        this.toastDeleted.next(id);
    }
    /**
     * Clear notifications array
     */
    clear() {
        this.notifications = [];
        this.emit();
    }
    /**
     * Creates toast and add it to array, returns toast id
     * @param snotify Snotify
     * @return number
     */
    create(snotify) {
        const config = mergeDeep(this.config.toast, this.config.type[snotify.config.type], snotify.config);
        const toast = new SnotifyToast(uuid(), snotify.title, snotify.body, config);
        this.add(toast);
        return toast;
    }
    setDefaults(defaults) {
        return (this.config = mergeDeep(this.config, defaults));
    }
    /**
     * Transform toast arguments into Snotify object
     */
    simple(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    success(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    error(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    info(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    warning(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    confirm(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    prompt(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    async(args) {
        let async;
        if (args.action instanceof Promise) {
            async = from(args.action);
        }
        else {
            async = args.action;
        }
        const toast = this.create(args);
        toast.on('mounted', () => {
            const subscription = async.subscribe((next) => {
                this.mergeToast(toast, next);
            }, (error) => {
                this.mergeToast(toast, error, SnotifyStyle.error);
                subscription.unsubscribe();
            }, () => {
                this.mergeToast(toast, {}, SnotifyStyle.success);
                subscription.unsubscribe();
            });
        });
        return toast;
    }
    mergeToast(toast, next, type) {
        if (next.body) {
            toast.body = next.body;
        }
        if (next.title) {
            toast.title = next.title;
        }
        if (type) {
            toast.config = mergeDeep(toast.config, this.config.global, this.config.toast[type], { type }, next.config);
        }
        else {
            toast.config = mergeDeep(toast.config, next.config);
        }
        if (next.html) {
            toast.config.html = next.html;
        }
        this.emit();
        this.toastChanged.next(toast);
    }
    /**
     * Creates empty toast with html string inside
     * @param html string | SafeHtml
     * @param config SnotifyToastConfig
     * @returns number
     */
    html(html, config) {
        return this.create({
            title: null,
            body: null,
            config: Object.assign(Object.assign({}, config), { html })
        });
    }
};
SnotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['SnotifyToastConfig',] }] }
];
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "simple", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "success", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "error", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "info", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "warning", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "confirm", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "prompt", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "async", null);
SnotifyService = __decorate([
    Injectable()
    // tslint:disable:unified-signatures
    ,
    __param(0, Inject('SnotifyToastConfig'))
], SnotifyService);

let ButtonsComponent = 
/**
 * Buttons component
 */
class ButtonsComponent {
    constructor(service) {
        this.service = service;
    }
    /**
     * remove toast
     */
    remove() {
        this.service.remove(this.toast.id);
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ButtonsComponent.prototype, "toast", void 0);
ButtonsComponent = __decorate([
    Component({
        selector: 'ng-snotify-button',
        template: "<div class=\"snotifyToast__buttons\">\r\n  <button\r\n    type=\"button\"\r\n    *ngFor=\"let button of toast.config.buttons\"\r\n    [ngClass]=\"{ 'snotifyToast__buttons--bold': button.bold }\"\r\n    (click)=\"button.action ? button.action(toast) : remove()\"\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
    /**
     * Buttons component
     */
], ButtonsComponent);

let PromptComponent = 
/**
 * Prompt component. Part of PROMPT type
 */
class PromptComponent {
    constructor() {
        /**
         * Is PROMPT focused
         */
        this.isPromptFocused = false;
    }
};
__decorate([
    Input()
], PromptComponent.prototype, "toast", void 0);
PromptComponent = __decorate([
    Component({
        selector: 'ng-snotify-prompt',
        template: "<span class=\"snotifyToast__input\" [ngClass]=\"{ 'snotifyToast__input--filled': isPromptFocused }\">\r\n  <input\r\n    (input)=\"toast.value = $event.target.value; toast.eventEmitter.next('input')\"\r\n    autofocus\r\n    class=\"snotifyToast__input__field\"\r\n    type=\"text\"\r\n    [id]=\"toast.id\"\r\n    (focus)=\"isPromptFocused = true\"\r\n    (blur)=\"isPromptFocused = !!toast.value.length\"\r\n  />\r\n  <label class=\"snotifyToast__input__label\" [for]=\"toast.id\">\r\n    <span class=\"snotifyToast__input__labelContent\">{{ toast.config.placeholder | truncate }}</span>\r\n  </label>\r\n</span>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
    /**
     * Prompt component. Part of PROMPT type
     */
], PromptComponent);

/**
 * Toast position
 */
var SnotifyPosition;
(function (SnotifyPosition) {
    SnotifyPosition["leftTop"] = "leftTop";
    SnotifyPosition["leftCenter"] = "leftCenter";
    SnotifyPosition["leftBottom"] = "leftBottom";
    SnotifyPosition["rightTop"] = "rightTop";
    SnotifyPosition["rightCenter"] = "rightCenter";
    SnotifyPosition["rightBottom"] = "rightBottom";
    SnotifyPosition["centerTop"] = "centerTop";
    SnotifyPosition["centerCenter"] = "centerCenter";
    SnotifyPosition["centerBottom"] = "centerBottom";
})(SnotifyPosition || (SnotifyPosition = {}));

let SnotifyComponent = class SnotifyComponent {
    constructor(service) {
        this.service = service;
        /**
         * Backdrop Opacity
         */
        this.backdrop = -1;
    }
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    ngOnInit() {
        this.emitter = this.service.emitter.subscribe((toasts) => {
            if (this.service.config.global.newOnTop) {
                this.dockSizeA = -this.service.config.global.maxOnScreen;
                this.dockSizeB = undefined;
                this.blockSizeA = -this.service.config.global.maxAtPosition;
                this.blockSizeB = undefined;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
            }
            else {
                this.dockSizeA = 0;
                this.dockSizeB = this.service.config.global.maxOnScreen;
                this.blockSizeA = 0;
                this.blockSizeB = this.service.config.global.maxAtPosition;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
            }
            this.notifications = this.splitToasts(toasts.slice(this.dockSizeA, this.dockSizeB));
            this.stateChanged('mounted');
        });
    }
    // TODO: fix backdrop if more than one toast called in a row
    /**
     * Changes the backdrop opacity
     * @param event SnotifyEvent
     */
    stateChanged(event) {
        if (!this.withBackdrop.length) {
            if (this.backdrop >= 0) {
                this.backdrop = -1;
            }
            return;
        }
        switch (event) {
            case 'mounted':
                if (this.backdrop < 0) {
                    this.backdrop = 0;
                }
                break;
            case 'beforeShow':
                this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
                break;
            case 'beforeHide':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = 0;
                }
                break;
            case 'hidden':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = -1;
                }
                break;
        }
    }
    /**
     * Split toasts toasts into different objects
     * @param toasts SnotifyToast[]
     * @returns SnotifyNotifications
     */
    splitToasts(toasts) {
        const result = {};
        for (const property in SnotifyPosition) {
            if (SnotifyPosition.hasOwnProperty(property)) {
                result[SnotifyPosition[property]] = [];
            }
        }
        toasts.forEach((toast) => {
            result[toast.config.position].push(toast);
        });
        return result;
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
};
SnotifyComponent.ctorParameters = () => [
    { type: SnotifyService }
];
SnotifyComponent = __decorate([
    Component({
        selector: 'ng-snotify',
        template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
        encapsulation: ViewEncapsulation.None
    })
], SnotifyComponent);

let ToastComponent = class ToastComponent {
    constructor(service) {
        this.service = service;
        this.stateChanged = new EventEmitter();
        /**
         * Toast state
         */
        this.state = {
            paused: false,
            progress: 0,
            animation: '',
            isDestroying: false,
            promptType: SnotifyStyle.prompt
        };
    }
    // Lifecycles
    /**
     * Init base options. Subscribe to toast changed, toast deleted
     */
    ngOnInit() {
        this.toastChangedSubscription = this.service.toastChanged.subscribe((toast) => {
            if (this.toast.id === toast.id) {
                this.initToast();
            }
        });
        this.toastDeletedSubscription = this.service.toastDeleted.subscribe(id => {
            if (this.toast.id === id) {
                this.onRemove();
            }
        });
        if (!this.toast.config.timeout) {
            this.toast.config.showProgressBar = false;
        }
        this.toast.eventEmitter.next('mounted');
        this.state.animation = 'snotifyToast--in';
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.stateChanged.emit('beforeShow');
            this.toast.eventEmitter.next('beforeShow');
            this.state.animation = this.toast.config.animation.enter;
        }, this.service.config.toast.animation.time / 5); // time to show toast push animation (snotifyToast--in)
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        cancelAnimationFrame(this.animationFrame);
        this.toast.eventEmitter.next('destroyed');
        this.toastChangedSubscription.unsubscribe();
        this.toastDeletedSubscription.unsubscribe();
    }
    /*
    Event hooks
     */
    /**
     * Trigger OnClick lifecycle
     */
    onClick() {
        this.toast.eventEmitter.next('click');
        if (this.toast.config.closeOnClick) {
            this.service.remove(this.toast.id);
        }
    }
    /**
     * Trigger beforeDestroy lifecycle. Removes toast
     */
    onRemove() {
        this.state.isDestroying = true;
        this.toast.eventEmitter.next('beforeHide');
        this.stateChanged.emit('beforeHide');
        this.state.animation = this.toast.config.animation.exit;
        setTimeout(() => {
            this.stateChanged.emit('hidden');
            this.state.animation = 'snotifyToast--out';
            this.toast.eventEmitter.next('hidden');
            setTimeout(() => this.service.remove(this.toast.id, true), this.toast.config.animation.time / 2);
        }, this.toast.config.animation.time / 2);
    }
    /**
     * Trigger onHoverEnter lifecycle
     */
    onMouseEnter() {
        this.toast.eventEmitter.next('mouseenter');
        if (this.toast.config.pauseOnHover) {
            this.state.paused = true;
        }
    }
    /**
     * Trigger onHoverLeave lifecycle
     */
    onMouseLeave() {
        if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
            this.state.paused = false;
            this.startTimeout(this.toast.config.timeout * this.state.progress);
        }
        this.toast.eventEmitter.next('mouseleave');
    }
    /**
     * Remove toast completely after animation
     */
    onExitTransitionEnd() {
        if (this.state.isDestroying) {
            return;
        }
        this.initToast();
        this.toast.eventEmitter.next('shown');
    }
    /*
     Common
     */
    /**
     * Initialize base toast config
     *
     */
    initToast() {
        if (this.toast.config.timeout > 0) {
            this.startTimeout(0);
        }
    }
    /**
     * Start progress bar
     * @param startTime number
     */
    startTimeout(startTime = 0) {
        const start = performance.now();
        const calculate = () => {
            this.animationFrame = requestAnimationFrame(timestamp => {
                const runtime = timestamp + startTime - start;
                const progress = Math.min(runtime / this.toast.config.timeout, 1);
                if (this.state.paused) {
                    cancelAnimationFrame(this.animationFrame);
                }
                else if (runtime < this.toast.config.timeout) {
                    this.state.progress = progress;
                    calculate();
                }
                else {
                    this.state.progress = 1;
                    cancelAnimationFrame(this.animationFrame);
                    this.service.remove(this.toast.id);
                }
            });
        };
        calculate();
    }
};
ToastComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ToastComponent.prototype, "toast", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "stateChanged", void 0);
ToastComponent = __decorate([
    Component({
        selector: 'ng-snotify-toast',
        template: "<div\r\n  [attr.role]=\"toast.config.type === state.promptType ? 'dialog' : 'alert'\"\r\n  [attr.aria-labelledby]=\"'snotify_' + toast.id\"\r\n  [attr.aria-modal]=\"toast.config.type === state.promptType\"\r\n  [ngClass]=\"[\r\n    'snotifyToast animated',\r\n    'snotify-' + toast.config.type,\r\n    state.animation,\r\n    toast.valid === undefined ? '' : toast.valid ? 'snotifyToast--valid' : 'snotifyToast--invalid'\r\n  ]\"\r\n  [ngStyle]=\"{\r\n    '-webkit-transition': toast.config.animation.time + 'ms',\r\n    transition: toast.config.animation.time + 'ms',\r\n    '-webkit-animation-duration': toast.config.animation.time + 'ms',\r\n    'animation-duration': toast.config.animation.time + 'ms'\r\n  }\"\r\n  (animationend)=\"onExitTransitionEnd()\"\r\n  (click)=\"onClick()\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"snotifyToast__progressBar\" *ngIf=\"toast.config.showProgressBar\">\r\n    <span class=\"snotifyToast__progressBar__percentage\" [ngStyle]=\"{ width: state.progress * 100 + '%' }\"></span>\r\n  </div>\r\n  <div class=\"snotifyToast__inner\" *ngIf=\"!toast.config.html; else toastHTML\">\r\n    <div class=\"snotifyToast__title\" [attr.id]=\"'snotify_' + toast.id\" *ngIf=\"toast.title\">\r\n      {{ toast.title | truncate: toast.config.titleMaxLength }}\r\n    </div>\r\n    <div class=\"snotifyToast__body\" *ngIf=\"toast.body\">{{ toast.body | truncate: toast.config.bodyMaxLength }}</div>\r\n    <ng-snotify-prompt *ngIf=\"toast.config.type === state.promptType\" [toast]=\"toast\"> </ng-snotify-prompt>\r\n    <div\r\n      *ngIf=\"!toast.config.icon; else elseBlock\"\r\n      [ngClass]=\"['snotify-icon', toast.config.iconClass || 'snotify-icon--' + toast.config.type]\"\r\n    ></div>\r\n    <ng-template #elseBlock>\r\n      <img class=\"snotify-icon\" [src]=\"toast.config.icon\" />\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #toastHTML>\r\n    <div class=\"snotifyToast__inner\" [innerHTML]=\"toast.config.html\"></div>\r\n  </ng-template>\r\n  <ng-snotify-button *ngIf=\"toast.config.buttons\" [toast]=\"toast\"></ng-snotify-button>\r\n</div>\r\n",
        encapsulation: ViewEncapsulation.None
    })
], ToastComponent);

let KeysPipe = 
/**
 * Extract object keys pipe
 */
class KeysPipe {
    transform(value, args = null) {
        if (!value) {
            return value;
        }
        return Object.keys(value);
    }
};
KeysPipe = __decorate([
    Pipe({
        name: 'keys',
        pure: false
    })
    /**
     * Extract object keys pipe
     */
], KeysPipe);

let TruncatePipe = 
/**
 * Truncate toast text pipe
 */
class TruncatePipe {
    transform(value, ...args) {
        let limit = 40;
        let trail = '...';
        if (args.length > 0) {
            limit = args.length > 0 ? parseInt(args[0], 10) : limit;
            trail = args.length > 1 ? args[1] : trail;
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
};
TruncatePipe = __decorate([
    Pipe({
        name: 'truncate'
    })
    /**
     * Truncate toast text pipe
     */
], TruncatePipe);

var SnotifyModule_1;
let SnotifyModule = SnotifyModule_1 = class SnotifyModule {
    static forRoot() {
        return {
            ngModule: SnotifyModule_1,
            providers: [SnotifyService]
        };
    }
};
SnotifyModule = SnotifyModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
        exports: [SnotifyComponent, TruncatePipe, KeysPipe]
    })
], SnotifyModule);

/**
 * Snotify default configuration object
 */
const ToastDefaults = {
    global: {
        newOnTop: true,
        maxOnScreen: 8,
        maxAtPosition: 8,
        filterDuplicates: false
    },
    toast: {
        type: SnotifyStyle.simple,
        showProgressBar: true,
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        bodyMaxLength: 150,
        titleMaxLength: 16,
        backdrop: -1,
        icon: null,
        iconClass: null,
        html: null,
        position: SnotifyPosition.rightBottom,
        animation: { enter: 'fadeIn', exit: 'fadeOut', time: 400 }
    },
    type: {
        [SnotifyStyle.prompt]: {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            placeholder: 'Enter answer here...',
            type: SnotifyStyle.prompt
        },
        [SnotifyStyle.confirm]: {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            type: SnotifyStyle.confirm
        },
        [SnotifyStyle.simple]: {
            type: SnotifyStyle.simple
        },
        [SnotifyStyle.success]: {
            type: SnotifyStyle.success
        },
        [SnotifyStyle.error]: {
            type: SnotifyStyle.error
        },
        [SnotifyStyle.warning]: {
            type: SnotifyStyle.warning
        },
        [SnotifyStyle.info]: {
            type: SnotifyStyle.info
        },
        [SnotifyStyle.async]: {
            pauseOnHover: false,
            closeOnClick: false,
            timeout: 0,
            showProgressBar: false,
            type: SnotifyStyle.async
        }
    }
};

/*
 * Public API Surface of ng-snotify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonsComponent, KeysPipe, PromptComponent, SnotifyComponent, SnotifyModule, SnotifyPosition, SnotifyService, SnotifyStyle, SnotifyToast, ToastComponent, ToastDefaults, TruncatePipe, SnotifyComponent as ɵa, SnotifyService as ɵb, TransformArgument as ɵd, SetToastType as ɵe, ToastComponent as ɵf, TruncatePipe as ɵg, ButtonsComponent as ɵh, PromptComponent as ɵi, KeysPipe as ɵj };
//# sourceMappingURL=ng-snotify.js.map
