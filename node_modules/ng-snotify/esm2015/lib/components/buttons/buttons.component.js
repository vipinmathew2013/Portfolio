import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
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
export { ButtonsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBYWhFLElBQWEsZ0JBQWdCO0FBSDdCOztHQUVHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFLM0IsWUFBb0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBRyxDQUFDO0lBRS9DOztPQUVHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUE7O1lBUjhCLGNBQWM7O0FBRGxDO0lBQVIsS0FBSyxFQUFFOytDQUFxQjtBQUpsQixnQkFBZ0I7SUFWNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw4VUFBdUM7UUFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztJQUVGOztPQUVHO0dBQ1UsZ0JBQWdCLENBYTVCO1NBYlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1zbm90aWZ5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbi8qKlxyXG4gKiBCdXR0b25zIGNvbXBvbmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEdldCBidXR0b25zIEFycmF5XHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9hc3Q6IFNub3RpZnlUb2FzdDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNub3RpZnlTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdG9hc3RcclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=