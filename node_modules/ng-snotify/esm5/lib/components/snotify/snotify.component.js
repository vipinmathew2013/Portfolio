import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyPosition } from '../../enums/snotify-position.enum';
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
        for (var property in SnotifyPosition) {
            if (SnotifyPosition.hasOwnProperty(property)) {
                result[SnotifyPosition[property]] = [];
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
        Component({
            selector: 'ng-snotify',
            template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
            encapsulation: ViewEncapsulation.None
        })
    ], SnotifyComponent);
    return SnotifyComponent;
}());
export { SnotifyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc25vdGlmeS9zbm90aWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVFwRTtJQWtDRSwwQkFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFUM0M7O1dBRUc7UUFDSCxhQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFNZ0MsQ0FBQztJQUUvQzs7T0FFRztJQUNILG1DQUFRLEdBQVI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFzQjtZQUNuRSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxD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QUM3QixDQUFDOztnQkFyRjRCLGNBQWM7O0lBbENoQyxnQkFBZ0I7UUFMNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsMGJBQXVDO1lBQ3ZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0F3SDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhIRCxJQXdIQztTQXhIWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Nub3RpZnkuc2VydmljZSc7XHJcbmltcG9ydCB7IFNub3RpZnlUb2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9zbm90aWZ5LXRvYXN0Lm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNub3RpZnlOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zbm90aWZ5LW5vdGlmaWNhdGlvbnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vZW51bXMvc25vdGlmeS1wb3NpdGlvbi5lbnVtJztcclxuaW1wb3J0IHsgU25vdGlmeUV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnQudHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNub3RpZnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbm90aWZ5LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbm90aWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIFRvYXN0cyBhcnJheVxyXG4gICAqL1xyXG4gIG5vdGlmaWNhdGlvbnM6IFNub3RpZnlOb3RpZmljYXRpb25zO1xyXG4gIC8qKlxyXG4gICAqIFRvYXN0cyBlbWl0dGVyXHJcbiAgICovXHJcbiAgZW1pdHRlcjogU3Vic2NyaXB0aW9uO1xyXG4gIC8qKlxyXG4gICAqIEhlbHBlciBmb3Igc2xpY2UgcGlwZSAobWF4T25TY3JlZW4pXHJcbiAgICovXHJcbiAgZG9ja1NpemVBOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZvciBzbGljZSBwaXBlIChtYXhPblNjcmVlbilcclxuICAgKi9cclxuICBkb2NrU2l6ZUI6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIZWxwZXIgZm9yIHNsaWNlIHBpcGUgKG1heEF0UG9zaXRpb24pXHJcbiAgICovXHJcbiAgYmxvY2tTaXplQTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEhlbHBlciBmb3Igc2xpY2UgcGlwZSAobWF4QXRQb3NpdGlvbilcclxuICAgKi9cclxuICBibG9ja1NpemVCOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQmFja2Ryb3AgT3BhY2l0eVxyXG4gICAqL1xyXG4gIGJhY2tkcm9wID0gLTE7XHJcbiAgLyoqXHJcbiAgICogSG93IG1hbnkgdG9hc3RzIHdpdGggYmFja2Ryb3AgaW4gY3VycmVudCBxdWV1ZVxyXG4gICAqL1xyXG4gIHdpdGhCYWNrZHJvcDogU25vdGlmeVRvYXN0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogU25vdGlmeVNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXQgYmFzZSBvcHRpb25zLiBTdWJzY3JpYmUgdG8gb3B0aW9ucywgbGlmZWN5Y2xlIGNoYW5nZVxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5lbWl0dGVyID0gdGhpcy5zZXJ2aWNlLmVtaXR0ZXIuc3Vic2NyaWJlKCh0b2FzdHM6IFNub3RpZnlUb2FzdFtdKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29uZmlnLmdsb2JhbC5uZXdPblRvcCkge1xyXG4gICAgICAgIHRoaXMuZG9ja1NpemVBID0gLXRoaXMuc2VydmljZS5jb25maWcuZ2xvYmFsLm1heE9uU2NyZWVuO1xyXG4gICAgICAgIHRoaXMuZG9ja1NpemVCID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplQSA9IC10aGlzLnNlcnZpY2UuY29uZmlnLmdsb2JhbC5tYXhBdFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplQiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRvYXN0cy5maWx0ZXIodG9hc3QgPT4gdG9hc3QuY29uZmlnLmJhY2tkcm9wID49IDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZG9ja1NpemVBID0gMDtcclxuICAgICAgICB0aGlzLmRvY2tTaXplQiA9IHRoaXMuc2VydmljZS5jb25maWcuZ2xvYmFsLm1heE9uU2NyZWVuO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplQSA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVCID0gdGhpcy5zZXJ2aWNlLmNvbmZpZy5nbG9iYWwubWF4QXRQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRvYXN0cy5maWx0ZXIodG9hc3QgPT4gdG9hc3QuY29uZmlnLmJhY2tkcm9wID49IDApLnJldmVyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSB0aGlzLnNwbGl0VG9hc3RzKHRvYXN0cy5zbGljZSh0aGlzLmRvY2tTaXplQSwgdGhpcy5kb2NrU2l6ZUIpKTtcclxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZWQoJ21vdW50ZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogZml4IGJhY2tkcm9wIGlmIG1vcmUgdGhhbiBvbmUgdG9hc3QgY2FsbGVkIGluIGEgcm93XHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgYmFja2Ryb3Agb3BhY2l0eVxyXG4gICAqIEBwYXJhbSBldmVudCBTbm90aWZ5RXZlbnRcclxuICAgKi9cclxuICBzdGF0ZUNoYW5nZWQoZXZlbnQ6IFNub3RpZnlFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLndpdGhCYWNrZHJvcC5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3AgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgIGNhc2UgJ21vdW50ZWQnOlxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy5iYWNrZHJvcCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdiZWZvcmVTaG93JzpcclxuICAgICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3BbdGhpcy53aXRoQmFja2Ryb3AubGVuZ3RoIC0gMV0uY29uZmlnLmJhY2tkcm9wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdiZWZvcmVIaWRlJzpcclxuICAgICAgICBpZiAodGhpcy53aXRoQmFja2Ryb3AubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmJhY2tkcm9wID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hpZGRlbic6XHJcbiAgICAgICAgaWYgKHRoaXMud2l0aEJhY2tkcm9wLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5iYWNrZHJvcCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwbGl0IHRvYXN0cyB0b2FzdHMgaW50byBkaWZmZXJlbnQgb2JqZWN0c1xyXG4gICAqIEBwYXJhbSB0b2FzdHMgU25vdGlmeVRvYXN0W11cclxuICAgKiBAcmV0dXJucyBTbm90aWZ5Tm90aWZpY2F0aW9uc1xyXG4gICAqL1xyXG4gIHNwbGl0VG9hc3RzKHRvYXN0czogU25vdGlmeVRvYXN0W10pOiBTbm90aWZ5Tm90aWZpY2F0aW9ucyB7XHJcbiAgICBjb25zdCByZXN1bHQ6IFNub3RpZnlOb3RpZmljYXRpb25zID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBTbm90aWZ5UG9zaXRpb24pIHtcclxuICAgICAgaWYgKFNub3RpZnlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICByZXN1bHRbU25vdGlmeVBvc2l0aW9uW3Byb3BlcnR5XV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvYXN0cy5mb3JFYWNoKCh0b2FzdDogU25vdGlmeVRvYXN0KSA9PiB7XHJcbiAgICAgIHJlc3VsdFt0b2FzdC5jb25maWcucG9zaXRpb24gYXMgc3RyaW5nXS5wdXNoKHRvYXN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZSBzdWJzY3JpcHRpb25zXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19