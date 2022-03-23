import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyStyle } from '../../enums/snotify-style.enum';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(service) {
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
    return ToastComponent;
}());
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSWhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU85RDtJQTBCRSx3QkFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFyQmpDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFVMUQ7O1dBRUc7UUFDSCxVQUFLLEdBQUc7WUFDTixNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU07U0FDaEMsQ0FBQztJQUU0QyxDQUFDO0lBRS9DLGFBQWE7SUFFYjs7T0FFRztJQUNILGlDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBbUI7WUFDdEYsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUM5QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFO1lBQ3BF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O0lBdEJsQztRQUFSLEtBQUssRUFBRTtpREFBcUI7SUFDbkI7UUFBVCxNQUFNLEVBQUU7d0RBQWlEO0lBTC9DLGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixxbkVBQXFDO1lBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7T0FDVyxjQUFjLENBeUsxQjtJQUFELHFCQUFDO0NBQUEsQUF6S0QsSUF5S0M7U0F6S1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU25vdGlmeUV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnQudHlwZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTdHlsZSB9IGZyb20gJy4uLy4uL2VudW1zL3Nub3RpZnktc3R5bGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNub3RpZnktdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRvYXN0IGZyb20gbm90aWZpY2F0aW9ucyBhcnJheVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvYXN0OiBTbm90aWZ5VG9hc3Q7XHJcbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U25vdGlmeUV2ZW50PigpO1xyXG5cclxuICB0b2FzdERlbGV0ZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICB0b2FzdENoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlkXHJcbiAgICovXHJcbiAgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9hc3Qgc3RhdGVcclxuICAgKi9cclxuICBzdGF0ZSA9IHtcclxuICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICBwcm9ncmVzczogMCxcclxuICAgIGFuaW1hdGlvbjogJycsXHJcbiAgICBpc0Rlc3Ryb3lpbmc6IGZhbHNlLFxyXG4gICAgcHJvbXB0VHlwZTogU25vdGlmeVN0eWxlLnByb21wdFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogU25vdGlmeVNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIExpZmVjeWNsZXNcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdCBiYXNlIG9wdGlvbnMuIFN1YnNjcmliZSB0byB0b2FzdCBjaGFuZ2VkLCB0b2FzdCBkZWxldGVkXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRvYXN0Q2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS50b2FzdENoYW5nZWQuc3Vic2NyaWJlKCh0b2FzdDogU25vdGlmeVRvYXN0KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0LmlkID09PSB0b2FzdC5pZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRvYXN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2FzdERlbGV0ZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNlcnZpY2UudG9hc3REZWxldGVkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0LmlkID09PSBpZCkge1xyXG4gICAgICAgIHRoaXMub25SZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQpIHtcclxuICAgICAgdGhpcy50b2FzdC5jb25maWcuc2hvd1Byb2dyZXNzQmFyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdtb3VudGVkJyk7XHJcbiAgICB0aGlzLnN0YXRlLmFuaW1hdGlvbiA9ICdzbm90aWZ5VG9hc3QtLWluJztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KCdiZWZvcmVTaG93Jyk7XHJcbiAgICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ2JlZm9yZVNob3cnKTtcclxuICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24uZW50ZXI7XHJcbiAgICB9LCB0aGlzLnNlcnZpY2UuY29uZmlnLnRvYXN0LmFuaW1hdGlvbi50aW1lIC8gNSk7IC8vIHRpbWUgdG8gc2hvdyB0b2FzdCBwdXNoIGFuaW1hdGlvbiAoc25vdGlmeVRvYXN0LS1pbilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHN1YnNjcmlwdGlvbnNcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnZGVzdHJveWVkJyk7XHJcbiAgICB0aGlzLnRvYXN0Q2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy50b2FzdERlbGV0ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgRXZlbnQgaG9va3NcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBPbkNsaWNrIGxpZmVjeWNsZVxyXG4gICAqL1xyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdjbGljaycpO1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLmNsb3NlT25DbGljaykge1xyXG4gICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBiZWZvcmVEZXN0cm95IGxpZmVjeWNsZS4gUmVtb3ZlcyB0b2FzdFxyXG4gICAqL1xyXG4gIG9uUmVtb3ZlKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnYmVmb3JlSGlkZScpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQuZW1pdCgnYmVmb3JlSGlkZScpO1xyXG4gICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24uZXhpdDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KCdoaWRkZW4nKTtcclxuICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSAnc25vdGlmeVRvYXN0LS1vdXQnO1xyXG4gICAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdoaWRkZW4nKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQsIHRydWUpLCB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24udGltZSAvIDIpO1xyXG4gICAgfSwgdGhpcy50b2FzdC5jb25maWcuYW5pbWF0aW9uLnRpbWUgLyAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgb25Ib3ZlckVudGVyIGxpZmVjeWNsZVxyXG4gICAqL1xyXG4gIG9uTW91c2VFbnRlcigpIHtcclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ21vdXNlZW50ZXInKTtcclxuICAgIGlmICh0aGlzLnRvYXN0LmNvbmZpZy5wYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBvbkhvdmVyTGVhdmUgbGlmZWN5Y2xlXHJcbiAgICovXHJcbiAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLnBhdXNlT25Ib3ZlciAmJiB0aGlzLnRvYXN0LmNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lb3V0KHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQgKiB0aGlzLnN0YXRlLnByb2dyZXNzKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ21vdXNlbGVhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0b2FzdCBjb21wbGV0ZWx5IGFmdGVyIGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIG9uRXhpdFRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3lpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0VG9hc3QoKTtcclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ3Nob3duJyk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICBDb21tb25cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBiYXNlIHRvYXN0IGNvbmZpZ1xyXG4gICAqXHJcbiAgICovXHJcbiAgaW5pdFRvYXN0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lb3V0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgcHJvZ3Jlc3MgYmFyXHJcbiAgICogQHBhcmFtIHN0YXJ0VGltZSBudW1iZXJcclxuICAgKi9cclxuICBzdGFydFRpbWVvdXQoc3RhcnRUaW1lOiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVzdGFtcCA9PiB7XHJcbiAgICAgICAgY29uc3QgcnVudGltZSA9IHRpbWVzdGFtcCArIHN0YXJ0VGltZSAtIHN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4ocnVudGltZSAvIHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhdXNlZCkge1xyXG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChydW50aW1lIDwgdGhpcy50b2FzdC5jb25maWcudGltZW91dCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2FsY3VsYXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==