(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-snotify', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-snotify'] = {}, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Toast style.
     */

    (function (SnotifyStyle) {
        SnotifyStyle["simple"] = "simple";
        SnotifyStyle["success"] = "success";
        SnotifyStyle["error"] = "error";
        SnotifyStyle["warning"] = "warning";
        SnotifyStyle["info"] = "info";
        SnotifyStyle["async"] = "async";
        SnotifyStyle["confirm"] = "confirm";
        SnotifyStyle["prompt"] = "prompt";
    })(exports.SnotifyStyle || (exports.SnotifyStyle = {}));

    /**
     * Transform arguments to Snotify object
     * @param target any
     * @param propertyKey SnotifyType
     * @param descriptor PropertyDescriptor
     * @returns Snotify
     */
    function TransformArgument(target, propertyKey, descriptor) {
        if (propertyKey === exports.SnotifyStyle.async) {
            return {
                value: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result;
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
                value: function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result;
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
                        result = (_a = {
                                title: null,
                                config: null,
                                body: args[0]
                            },
                            _a[typeof args[1] === 'string' ? 'title' : 'config'] = args[1],
                            _a);
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
    function mergeDeep() {
        var _a;
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        var target = {};
        if (!sources.length) {
            return target;
        }
        while (sources.length > 0) {
            var source = sources.shift();
            if (isObject(source)) {
                for (var key in source) {
                    if (isObject(source[key])) {
                        target[key] = mergeDeep(target[key], source[key]);
                    }
                    else {
                        Object.assign(target, (_a = {}, _a[key] = source[key], _a));
                    }
                }
            }
        }
        return target;
    }
    function animate(start, duration, callback) {
        var endTime;
        requestAnimationFrame(function (timestamp) { return (endTime = timestamp + duration); });
        var calculate = function () {
            requestAnimationFrame(function (timestamp) {
                var runtime = timestamp - endTime;
                var progress = Math.min(runtime / duration, 1) + start;
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
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args[0].config = __assign(__assign({}, args[0].config), { type: propertyKey });
                return descriptor.value.apply(this, args);
            }
        };
    }

    // @TODO remove method in observable way
    /**
     * Toast main model
     */
    var SnotifyToast = /** @class */ (function () {
        function SnotifyToast(id, title, body, config) {
            var _this = this;
            this.id = id;
            this.title = title;
            this.body = body;
            this.config = config;
            /**
             * Emits SnotifyEvent
             */
            this.eventEmitter = new rxjs.Subject();
            /**
             * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
             */
            this.eventsHolder = [];
            if (this.config.type === exports.SnotifyStyle.prompt) {
                this.value = '';
            }
            this.on('hidden', function () {
                _this.eventsHolder.forEach(function (subscription) {
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
        SnotifyToast.prototype.on = function (event, action) {
            var _this = this;
            this.eventsHolder.push(this.eventEmitter.subscribe(function (e) {
                if (e === event) {
                    action(_this);
                }
            }));
            return this;
        };
        /**
         * Tests if a toast equals this toast.
         * @returns boolean true then equals else false.
         * @param toast SnotifyToast
         */
        SnotifyToast.prototype.equals = function (toast) {
            return this.body === toast.body && this.title === toast.title && this.config.type === toast.config.type;
        };
        return SnotifyToast;
    }());

    /**
     * SnotifyService - create, remove, config toasts
     */
    var SnotifyService = /** @class */ (function () {
        function SnotifyService(config) {
            this.config = config;
            this.emitter = new rxjs.Subject();
            this.toastChanged = new rxjs.Subject();
            this.toastDeleted = new rxjs.Subject();
            this.notifications = [];
        }
        /**
         * emit changes in notifications array
         */
        SnotifyService.prototype.emit = function () {
            this.emitter.next(this.notifications.slice());
        };
        /**
         * returns SnotifyToast object
         * @param id Number
         * @return SnotifyToast|undefined
         */
        SnotifyService.prototype.get = function (id) {
            return this.notifications.find(function (toast) { return toast.id === id; });
        };
        /**
         * add SnotifyToast to notifications array
         * @param toast SnotifyToast
         */
        SnotifyService.prototype.add = function (toast) {
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
        };
        /**
         * checks if the toast is in the collection.
         * @param inToast SnotifyToast
         * @returns boolean
         */
        SnotifyService.prototype.containsToast = function (inToast) {
            return this.notifications.some(function (toast) { return toast.equals(inToast); });
        };
        /**
         * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
         * @param id number
         * @param remove boolean
         */
        SnotifyService.prototype.remove = function (id, remove) {
            if (!id) {
                return this.clear();
            }
            else if (remove) {
                this.notifications = this.notifications.filter(function (toast) { return toast.id !== id; });
                return this.emit();
            }
            this.toastDeleted.next(id);
        };
        /**
         * Clear notifications array
         */
        SnotifyService.prototype.clear = function () {
            this.notifications = [];
            this.emit();
        };
        /**
         * Creates toast and add it to array, returns toast id
         * @param snotify Snotify
         * @return number
         */
        SnotifyService.prototype.create = function (snotify) {
            var config = mergeDeep(this.config.toast, this.config.type[snotify.config.type], snotify.config);
            var toast = new SnotifyToast(uuid(), snotify.title, snotify.body, config);
            this.add(toast);
            return toast;
        };
        SnotifyService.prototype.setDefaults = function (defaults) {
            return (this.config = mergeDeep(this.config, defaults));
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.simple = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.success = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.error = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.info = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.warning = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.confirm = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.prompt = function (args) {
            return this.create(args);
        };
        /**
         * Transform toast arguments into Snotify object
         */
        SnotifyService.prototype.async = function (args) {
            var _this = this;
            var async;
            if (args.action instanceof Promise) {
                async = rxjs.from(args.action);
            }
            else {
                async = args.action;
            }
            var toast = this.create(args);
            toast.on('mounted', function () {
                var subscription = async.subscribe(function (next) {
                    _this.mergeToast(toast, next);
                }, function (error) {
                    _this.mergeToast(toast, error, exports.SnotifyStyle.error);
                    subscription.unsubscribe();
                }, function () {
                    _this.mergeToast(toast, {}, exports.SnotifyStyle.success);
                    subscription.unsubscribe();
                });
            });
            return toast;
        };
        SnotifyService.prototype.mergeToast = function (toast, next, type) {
            if (next.body) {
                toast.body = next.body;
            }
            if (next.title) {
                toast.title = next.title;
            }
            if (type) {
                toast.config = mergeDeep(toast.config, this.config.global, this.config.toast[type], { type: type }, next.config);
            }
            else {
                toast.config = mergeDeep(toast.config, next.config);
            }
            if (next.html) {
                toast.config.html = next.html;
            }
            this.emit();
            this.toastChanged.next(toast);
        };
        /**
         * Creates empty toast with html string inside
         * @param html string | SafeHtml
         * @param config SnotifyToastConfig
         * @returns number
         */
        SnotifyService.prototype.html = function (html, config) {
            return this.create({
                title: null,
                body: null,
                config: __assign(__assign({}, config), { html: html })
            });
        };
        SnotifyService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['SnotifyToastConfig',] }] }
        ]; };
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
            core.Injectable()
            // tslint:disable:unified-signatures
            ,
            __param(0, core.Inject('SnotifyToastConfig'))
        ], SnotifyService);
        return SnotifyService;
    }());

    var ButtonsComponent = /** @class */ (function () {
        function ButtonsComponent(service) {
            this.service = service;
        }
        /**
         * remove toast
         */
        ButtonsComponent.prototype.remove = function () {
            this.service.remove(this.toast.id);
        };
        ButtonsComponent.ctorParameters = function () { return [
            { type: SnotifyService }
        ]; };
        __decorate([
            core.Input()
        ], ButtonsComponent.prototype, "toast", void 0);
        ButtonsComponent = __decorate([
            core.Component({
                selector: 'ng-snotify-button',
                template: "<div class=\"snotifyToast__buttons\">\r\n  <button\r\n    type=\"button\"\r\n    *ngFor=\"let button of toast.config.buttons\"\r\n    [ngClass]=\"{ 'snotifyToast__buttons--bold': button.bold }\"\r\n    (click)=\"button.action ? button.action(toast) : remove()\"\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</div>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            })
            /**
             * Buttons component
             */
        ], ButtonsComponent);
        return ButtonsComponent;
    }());

    var PromptComponent = /** @class */ (function () {
        /**
         * Prompt component. Part of PROMPT type
         */
        function PromptComponent() {
            /**
             * Is PROMPT focused
             */
            this.isPromptFocused = false;
        }
        __decorate([
            core.Input()
        ], PromptComponent.prototype, "toast", void 0);
        PromptComponent = __decorate([
            core.Component({
                selector: 'ng-snotify-prompt',
                template: "<span class=\"snotifyToast__input\" [ngClass]=\"{ 'snotifyToast__input--filled': isPromptFocused }\">\r\n  <input\r\n    (input)=\"toast.value = $event.target.value; toast.eventEmitter.next('input')\"\r\n    autofocus\r\n    class=\"snotifyToast__input__field\"\r\n    type=\"text\"\r\n    [id]=\"toast.id\"\r\n    (focus)=\"isPromptFocused = true\"\r\n    (blur)=\"isPromptFocused = !!toast.value.length\"\r\n  />\r\n  <label class=\"snotifyToast__input__label\" [for]=\"toast.id\">\r\n    <span class=\"snotifyToast__input__labelContent\">{{ toast.config.placeholder | truncate }}</span>\r\n  </label>\r\n</span>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            })
            /**
             * Prompt component. Part of PROMPT type
             */
        ], PromptComponent);
        return PromptComponent;
    }());

    /**
     * Toast position
     */

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
    })(exports.SnotifyPosition || (exports.SnotifyPosition = {}));

    var SnotifyComponent = /** @class */ (function () {
        function SnotifyComponent(service) {
            this.service = service;
            /**
             * Backdrop Opacity
             */
            this.backdrop = -1;
        }
        /**
         * Init base options. Subscribe to options, lifecycle change
         */
        SnotifyComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.emitter = this.service.emitter.subscribe(function (toasts) {
                if (_this.service.config.global.newOnTop) {
                    _this.dockSizeA = -_this.service.config.global.maxOnScreen;
                    _this.dockSizeB = undefined;
                    _this.blockSizeA = -_this.service.config.global.maxAtPosition;
                    _this.blockSizeB = undefined;
                    _this.withBackdrop = toasts.filter(function (toast) { return toast.config.backdrop >= 0; });
                }
                else {
                    _this.dockSizeA = 0;
                    _this.dockSizeB = _this.service.config.global.maxOnScreen;
                    _this.blockSizeA = 0;
                    _this.blockSizeB = _this.service.config.global.maxAtPosition;
                    _this.withBackdrop = toasts.filter(function (toast) { return toast.config.backdrop >= 0; }).reverse();
                }
                _this.notifications = _this.splitToasts(toasts.slice(_this.dockSizeA, _this.dockSizeB));
                _this.stateChanged('mounted');
            });
        };
        // TODO: fix backdrop if more than one toast called in a row
        /**
         * Changes the backdrop opacity
         * @param event SnotifyEvent
         */
        SnotifyComponent.prototype.stateChanged = function (event) {
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
        };
        /**
         * Split toasts toasts into different objects
         * @param toasts SnotifyToast[]
         * @returns SnotifyNotifications
         */
        SnotifyComponent.prototype.splitToasts = function (toasts) {
            var result = {};
            for (var property in exports.SnotifyPosition) {
                if (exports.SnotifyPosition.hasOwnProperty(property)) {
                    result[exports.SnotifyPosition[property]] = [];
                }
            }
            toasts.forEach(function (toast) {
                result[toast.config.position].push(toast);
            });
            return result;
        };
        /**
         * Unsubscribe subscriptions
         */
        SnotifyComponent.prototype.ngOnDestroy = function () {
            this.emitter.unsubscribe();
        };
        SnotifyComponent.ctorParameters = function () { return [
            { type: SnotifyService }
        ]; };
        SnotifyComponent = __decorate([
            core.Component({
                selector: 'ng-snotify',
                template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
                encapsulation: core.ViewEncapsulation.None
            })
        ], SnotifyComponent);
        return SnotifyComponent;
    }());

    var ToastComponent = /** @class */ (function () {
        function ToastComponent(service) {
            this.service = service;
            this.stateChanged = new core.EventEmitter();
            /**
             * Toast state
             */
            this.state = {
                paused: false,
                progress: 0,
                animation: '',
                isDestroying: false,
                promptType: exports.SnotifyStyle.prompt
            };
        }
        // Lifecycles
        /**
         * Init base options. Subscribe to toast changed, toast deleted
         */
        ToastComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.toastChangedSubscription = this.service.toastChanged.subscribe(function (toast) {
                if (_this.toast.id === toast.id) {
                    _this.initToast();
                }
            });
            this.toastDeletedSubscription = this.service.toastDeleted.subscribe(function (id) {
                if (_this.toast.id === id) {
                    _this.onRemove();
                }
            });
            if (!this.toast.config.timeout) {
                this.toast.config.showProgressBar = false;
            }
            this.toast.eventEmitter.next('mounted');
            this.state.animation = 'snotifyToast--in';
        };
        ToastComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.stateChanged.emit('beforeShow');
                _this.toast.eventEmitter.next('beforeShow');
                _this.state.animation = _this.toast.config.animation.enter;
            }, this.service.config.toast.animation.time / 5); // time to show toast push animation (snotifyToast--in)
        };
        /**
         * Unsubscribe subscriptions
         */
        ToastComponent.prototype.ngOnDestroy = function () {
            cancelAnimationFrame(this.animationFrame);
            this.toast.eventEmitter.next('destroyed');
            this.toastChangedSubscription.unsubscribe();
            this.toastDeletedSubscription.unsubscribe();
        };
        /*
        Event hooks
         */
        /**
         * Trigger OnClick lifecycle
         */
        ToastComponent.prototype.onClick = function () {
            this.toast.eventEmitter.next('click');
            if (this.toast.config.closeOnClick) {
                this.service.remove(this.toast.id);
            }
        };
        /**
         * Trigger beforeDestroy lifecycle. Removes toast
         */
        ToastComponent.prototype.onRemove = function () {
            var _this = this;
            this.state.isDestroying = true;
            this.toast.eventEmitter.next('beforeHide');
            this.stateChanged.emit('beforeHide');
            this.state.animation = this.toast.config.animation.exit;
            setTimeout(function () {
                _this.stateChanged.emit('hidden');
                _this.state.animation = 'snotifyToast--out';
                _this.toast.eventEmitter.next('hidden');
                setTimeout(function () { return _this.service.remove(_this.toast.id, true); }, _this.toast.config.animation.time / 2);
            }, this.toast.config.animation.time / 2);
        };
        /**
         * Trigger onHoverEnter lifecycle
         */
        ToastComponent.prototype.onMouseEnter = function () {
            this.toast.eventEmitter.next('mouseenter');
            if (this.toast.config.pauseOnHover) {
                this.state.paused = true;
            }
        };
        /**
         * Trigger onHoverLeave lifecycle
         */
        ToastComponent.prototype.onMouseLeave = function () {
            if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
                this.state.paused = false;
                this.startTimeout(this.toast.config.timeout * this.state.progress);
            }
            this.toast.eventEmitter.next('mouseleave');
        };
        /**
         * Remove toast completely after animation
         */
        ToastComponent.prototype.onExitTransitionEnd = function () {
            if (this.state.isDestroying) {
                return;
            }
            this.initToast();
            this.toast.eventEmitter.next('shown');
        };
        /*
         Common
         */
        /**
         * Initialize base toast config
         *
         */
        ToastComponent.prototype.initToast = function () {
            if (this.toast.config.timeout > 0) {
                this.startTimeout(0);
            }
        };
        /**
         * Start progress bar
         * @param startTime number
         */
        ToastComponent.prototype.startTimeout = function (startTime) {
            var _this = this;
            if (startTime === void 0) { startTime = 0; }
            var start = performance.now();
            var calculate = function () {
                _this.animationFrame = requestAnimationFrame(function (timestamp) {
                    var runtime = timestamp + startTime - start;
                    var progress = Math.min(runtime / _this.toast.config.timeout, 1);
                    if (_this.state.paused) {
                        cancelAnimationFrame(_this.animationFrame);
                    }
                    else if (runtime < _this.toast.config.timeout) {
                        _this.state.progress = progress;
                        calculate();
                    }
                    else {
                        _this.state.progress = 1;
                        cancelAnimationFrame(_this.animationFrame);
                        _this.service.remove(_this.toast.id);
                    }
                });
            };
            calculate();
        };
        ToastComponent.ctorParameters = function () { return [
            { type: SnotifyService }
        ]; };
        __decorate([
            core.Input()
        ], ToastComponent.prototype, "toast", void 0);
        __decorate([
            core.Output()
        ], ToastComponent.prototype, "stateChanged", void 0);
        ToastComponent = __decorate([
            core.Component({
                selector: 'ng-snotify-toast',
                template: "<div\r\n  [attr.role]=\"toast.config.type === state.promptType ? 'dialog' : 'alert'\"\r\n  [attr.aria-labelledby]=\"'snotify_' + toast.id\"\r\n  [attr.aria-modal]=\"toast.config.type === state.promptType\"\r\n  [ngClass]=\"[\r\n    'snotifyToast animated',\r\n    'snotify-' + toast.config.type,\r\n    state.animation,\r\n    toast.valid === undefined ? '' : toast.valid ? 'snotifyToast--valid' : 'snotifyToast--invalid'\r\n  ]\"\r\n  [ngStyle]=\"{\r\n    '-webkit-transition': toast.config.animation.time + 'ms',\r\n    transition: toast.config.animation.time + 'ms',\r\n    '-webkit-animation-duration': toast.config.animation.time + 'ms',\r\n    'animation-duration': toast.config.animation.time + 'ms'\r\n  }\"\r\n  (animationend)=\"onExitTransitionEnd()\"\r\n  (click)=\"onClick()\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"snotifyToast__progressBar\" *ngIf=\"toast.config.showProgressBar\">\r\n    <span class=\"snotifyToast__progressBar__percentage\" [ngStyle]=\"{ width: state.progress * 100 + '%' }\"></span>\r\n  </div>\r\n  <div class=\"snotifyToast__inner\" *ngIf=\"!toast.config.html; else toastHTML\">\r\n    <div class=\"snotifyToast__title\" [attr.id]=\"'snotify_' + toast.id\" *ngIf=\"toast.title\">\r\n      {{ toast.title | truncate: toast.config.titleMaxLength }}\r\n    </div>\r\n    <div class=\"snotifyToast__body\" *ngIf=\"toast.body\">{{ toast.body | truncate: toast.config.bodyMaxLength }}</div>\r\n    <ng-snotify-prompt *ngIf=\"toast.config.type === state.promptType\" [toast]=\"toast\"> </ng-snotify-prompt>\r\n    <div\r\n      *ngIf=\"!toast.config.icon; else elseBlock\"\r\n      [ngClass]=\"['snotify-icon', toast.config.iconClass || 'snotify-icon--' + toast.config.type]\"\r\n    ></div>\r\n    <ng-template #elseBlock>\r\n      <img class=\"snotify-icon\" [src]=\"toast.config.icon\" />\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #toastHTML>\r\n    <div class=\"snotifyToast__inner\" [innerHTML]=\"toast.config.html\"></div>\r\n  </ng-template>\r\n  <ng-snotify-button *ngIf=\"toast.config.buttons\" [toast]=\"toast\"></ng-snotify-button>\r\n</div>\r\n",
                encapsulation: core.ViewEncapsulation.None
            })
        ], ToastComponent);
        return ToastComponent;
    }());

    var KeysPipe = /** @class */ (function () {
        /**
         * Extract object keys pipe
         */
        function KeysPipe() {
        }
        KeysPipe.prototype.transform = function (value, args) {
            if (args === void 0) { args = null; }
            if (!value) {
                return value;
            }
            return Object.keys(value);
        };
        KeysPipe = __decorate([
            core.Pipe({
                name: 'keys',
                pure: false
            })
            /**
             * Extract object keys pipe
             */
        ], KeysPipe);
        return KeysPipe;
    }());

    var TruncatePipe = /** @class */ (function () {
        /**
         * Truncate toast text pipe
         */
        function TruncatePipe() {
        }
        TruncatePipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var limit = 40;
            var trail = '...';
            if (args.length > 0) {
                limit = args.length > 0 ? parseInt(args[0], 10) : limit;
                trail = args.length > 1 ? args[1] : trail;
            }
            return value.length > limit ? value.substring(0, limit) + trail : value;
        };
        TruncatePipe = __decorate([
            core.Pipe({
                name: 'truncate'
            })
            /**
             * Truncate toast text pipe
             */
        ], TruncatePipe);
        return TruncatePipe;
    }());

    var SnotifyModule = /** @class */ (function () {
        function SnotifyModule() {
        }
        SnotifyModule_1 = SnotifyModule;
        SnotifyModule.forRoot = function () {
            return {
                ngModule: SnotifyModule_1,
                providers: [SnotifyService]
            };
        };
        var SnotifyModule_1;
        SnotifyModule = SnotifyModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
                exports: [SnotifyComponent, TruncatePipe, KeysPipe]
            })
        ], SnotifyModule);
        return SnotifyModule;
    }());

    var _a;
    /**
     * Snotify default configuration object
     */
    var ToastDefaults = {
        global: {
            newOnTop: true,
            maxOnScreen: 8,
            maxAtPosition: 8,
            filterDuplicates: false
        },
        toast: {
            type: exports.SnotifyStyle.simple,
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
            position: exports.SnotifyPosition.rightBottom,
            animation: { enter: 'fadeIn', exit: 'fadeOut', time: 400 }
        },
        type: (_a = {},
            _a[exports.SnotifyStyle.prompt] = {
                timeout: 0,
                closeOnClick: false,
                buttons: [
                    { text: 'Ok', action: null, bold: true },
                    { text: 'Cancel', action: null, bold: false }
                ],
                placeholder: 'Enter answer here...',
                type: exports.SnotifyStyle.prompt
            },
            _a[exports.SnotifyStyle.confirm] = {
                timeout: 0,
                closeOnClick: false,
                buttons: [
                    { text: 'Ok', action: null, bold: true },
                    { text: 'Cancel', action: null, bold: false }
                ],
                type: exports.SnotifyStyle.confirm
            },
            _a[exports.SnotifyStyle.simple] = {
                type: exports.SnotifyStyle.simple
            },
            _a[exports.SnotifyStyle.success] = {
                type: exports.SnotifyStyle.success
            },
            _a[exports.SnotifyStyle.error] = {
                type: exports.SnotifyStyle.error
            },
            _a[exports.SnotifyStyle.warning] = {
                type: exports.SnotifyStyle.warning
            },
            _a[exports.SnotifyStyle.info] = {
                type: exports.SnotifyStyle.info
            },
            _a[exports.SnotifyStyle.async] = {
                pauseOnHover: false,
                closeOnClick: false,
                timeout: 0,
                showProgressBar: false,
                type: exports.SnotifyStyle.async
            },
            _a)
    };

    exports.ButtonsComponent = ButtonsComponent;
    exports.KeysPipe = KeysPipe;
    exports.PromptComponent = PromptComponent;
    exports.SnotifyComponent = SnotifyComponent;
    exports.SnotifyModule = SnotifyModule;
    exports.SnotifyService = SnotifyService;
    exports.SnotifyToast = SnotifyToast;
    exports.ToastComponent = ToastComponent;
    exports.ToastDefaults = ToastDefaults;
    exports.TruncatePipe = TruncatePipe;
    exports.ɵa = SnotifyComponent;
    exports.ɵb = SnotifyService;
    exports.ɵd = TransformArgument;
    exports.ɵe = SetToastType;
    exports.ɵf = ToastComponent;
    exports.ɵg = TruncatePipe;
    exports.ɵh = ButtonsComponent;
    exports.ɵi = PromptComponent;
    exports.ɵj = KeysPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-snotify.umd.js.map
