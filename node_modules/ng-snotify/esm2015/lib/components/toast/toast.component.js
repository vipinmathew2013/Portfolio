import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyStyle } from '../../enums/snotify-style.enum';
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
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSWhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU85RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBMEJ6QixZQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQXJCakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVUxRDs7V0FFRztRQUNILFVBQUssR0FBRztZQUNOLE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTTtTQUNoQyxDQUFDO0lBRTRDLENBQUM7SUFFL0MsYUFBYTtJQUViOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDMUYsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENB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LEVBQUU7b0RBQWlEO0FBTC9DLGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixxbkVBQXFDO1FBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7R0FDVyxjQUFjLENBeUsxQjtTQXpLWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25vdGlmeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbm90aWZ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTbm90aWZ5VG9hc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvc25vdGlmeS10b2FzdC5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTbm90aWZ5RXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudC50eXBlJztcclxuaW1wb3J0IHsgU25vdGlmeVN0eWxlIH0gZnJvbSAnLi4vLi4vZW51bXMvc25vdGlmeS1zdHlsZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctc25vdGlmeS10b2FzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAvKipcclxuICAgKiBHZXQgdG9hc3QgZnJvbSBub3RpZmljYXRpb25zIGFycmF5XHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9hc3Q6IFNub3RpZnlUb2FzdDtcclxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxTbm90aWZ5RXZlbnQ+KCk7XHJcblxyXG4gIHRvYXN0RGVsZXRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHRvYXN0Q2hhbmdlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaWRcclxuICAgKi9cclxuICBhbmltYXRpb25GcmFtZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUb2FzdCBzdGF0ZVxyXG4gICAqL1xyXG4gIHN0YXRlID0ge1xyXG4gICAgcGF1c2VkOiBmYWxzZSxcclxuICAgIHByb2dyZXNzOiAwLFxyXG4gICAgYW5pbWF0aW9uOiAnJyxcclxuICAgIGlzRGVzdHJveWluZzogZmFsc2UsXHJcbiAgICBwcm9tcHRUeXBlOiBTbm90aWZ5U3R5bGUucHJvbXB0XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBTbm90aWZ5U2VydmljZSkge31cclxuXHJcbiAgLy8gTGlmZWN5Y2xlc1xyXG5cclxuICAvKipcclxuICAgKiBJbml0IGJhc2Ugb3B0aW9ucy4gU3Vic2NyaWJlIHRvIHRvYXN0IGNoYW5nZWQsIHRvYXN0IGRlbGV0ZWRcclxuICAgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9hc3RDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlLnRvYXN0Q2hhbmdlZC5zdWJzY3JpYmUoKHRvYXN0OiBTbm90aWZ5VG9hc3QpID0+IHtcclxuICAgICAgaWYgKHRoaXMudG9hc3QuaWQgPT09IHRvYXN0LmlkKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VG9hc3QoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRvYXN0RGVsZXRlZFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS50b2FzdERlbGV0ZWQuc3Vic2NyaWJlKGlkID0+IHtcclxuICAgICAgaWYgKHRoaXMudG9hc3QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgdGhpcy5vblJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy50b2FzdC5jb25maWcudGltZW91dCkge1xyXG4gICAgICB0aGlzLnRvYXN0LmNvbmZpZy5zaG93UHJvZ3Jlc3NCYXIgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ21vdW50ZWQnKTtcclxuICAgIHRoaXMuc3RhdGUuYW5pbWF0aW9uID0gJ3Nub3RpZnlUb2FzdC0taW4nO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkLmVtaXQoJ2JlZm9yZVNob3cnKTtcclxuICAgICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnYmVmb3JlU2hvdycpO1xyXG4gICAgICB0aGlzLnN0YXRlLmFuaW1hdGlvbiA9IHRoaXMudG9hc3QuY29uZmlnLmFuaW1hdGlvbi5lbnRlcjtcclxuICAgIH0sIHRoaXMuc2VydmljZS5jb25maWcudG9hc3QuYW5pbWF0aW9uLnRpbWUgLyA1KTsgLy8gdGltZSB0byBzaG93IHRvYXN0IHB1c2ggYW5pbWF0aW9uIChzbm90aWZ5VG9hc3QtLWluKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmUgc3Vic2NyaXB0aW9uc1xyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdkZXN0cm95ZWQnKTtcclxuICAgIHRoaXMudG9hc3RDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnRvYXN0RGVsZXRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBFdmVudCBob29rc1xyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIE9uQ2xpY2sgbGlmZWN5Y2xlXHJcbiAgICovXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ2NsaWNrJyk7XHJcbiAgICBpZiAodGhpcy50b2FzdC5jb25maWcuY2xvc2VPbkNsaWNrKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUodGhpcy50b2FzdC5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIGJlZm9yZURlc3Ryb3kgbGlmZWN5Y2xlLiBSZW1vdmVzIHRvYXN0XHJcbiAgICovXHJcbiAgb25SZW1vdmUoKSB7XHJcbiAgICB0aGlzLnN0YXRlLmlzRGVzdHJveWluZyA9IHRydWU7XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdiZWZvcmVIaWRlJyk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KCdiZWZvcmVIaWRlJyk7XHJcbiAgICB0aGlzLnN0YXRlLmFuaW1hdGlvbiA9IHRoaXMudG9hc3QuY29uZmlnLmFuaW1hdGlvbi5leGl0O1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkLmVtaXQoJ2hpZGRlbicpO1xyXG4gICAgICB0aGlzLnN0YXRlLmFuaW1hdGlvbiA9ICdzbm90aWZ5VG9hc3QtLW91dCc7XHJcbiAgICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ2hpZGRlbicpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VydmljZS5yZW1vdmUodGhpcy50b2FzdC5pZCwgdHJ1ZSksIHRoaXMudG9hc3QuY29uZmlnLmFuaW1hdGlvbi50aW1lIC8gMik7XHJcbiAgICB9LCB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24udGltZSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBvbkhvdmVyRW50ZXIgbGlmZWN5Y2xlXHJcbiAgICovXHJcbiAgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnbW91c2VlbnRlcicpO1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLnBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLnN0YXRlLnBhdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIG9uSG92ZXJMZWF2ZSBsaWZlY3ljbGVcclxuICAgKi9cclxuICBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICBpZiAodGhpcy50b2FzdC5jb25maWcucGF1c2VPbkhvdmVyICYmIHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zdGFydFRpbWVvdXQodGhpcy50b2FzdC5jb25maWcudGltZW91dCAqIHRoaXMuc3RhdGUucHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnbW91c2VsZWF2ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRvYXN0IGNvbXBsZXRlbHkgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgb25FeGl0VHJhbnNpdGlvbkVuZCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRUb2FzdCgpO1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnc2hvd24nKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgIENvbW1vblxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGJhc2UgdG9hc3QgY29uZmlnXHJcbiAgICpcclxuICAgKi9cclxuICBpbml0VG9hc3QoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b2FzdC5jb25maWcudGltZW91dCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWVvdXQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCBwcm9ncmVzcyBiYXJcclxuICAgKiBAcGFyYW0gc3RhcnRUaW1lIG51bWJlclxyXG4gICAqL1xyXG4gIHN0YXJ0VGltZW91dChzdGFydFRpbWU6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBjb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXN0YW1wID0+IHtcclxuICAgICAgICBjb25zdCBydW50aW1lID0gdGltZXN0YW1wICsgc3RhcnRUaW1lIC0gc3RhcnQ7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbihydW50aW1lIC8gdGhpcy50b2FzdC5jb25maWcudGltZW91dCwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJ1bnRpbWUgPCB0aGlzLnRvYXN0LmNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICBjYWxjdWxhdGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUodGhpcy50b2FzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjdWxhdGUoKTtcclxuICB9XHJcbn1cclxuIl19