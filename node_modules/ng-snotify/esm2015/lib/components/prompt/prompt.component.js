import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
export { PromptComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNub3RpZnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhN0YsSUFBYSxlQUFlO0FBSDVCOztHQUVHO0FBQ0gsTUFBYSxlQUFlO0lBQTVCO1FBS0U7O1dBRUc7UUFDSCxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQUEsQ0FBQTtBQUxVO0lBQVIsS0FBSyxFQUFFOzhDQUFxQjtBQUpsQixlQUFlO0lBVjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0Isc25CQUFzQztRQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtLQUN0QyxDQUFDO0lBRUY7O09BRUc7R0FDVSxlQUFlLENBUzNCO1NBVFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5VG9hc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvc25vdGlmeS10b2FzdC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNub3RpZnktcHJvbXB0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG4vKipcclxuICogUHJvbXB0IGNvbXBvbmVudC4gUGFydCBvZiBQUk9NUFQgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21wdENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogR2V0IFBST01QVCBwbGFjZWhvbGRlclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvYXN0OiBTbm90aWZ5VG9hc3Q7XHJcbiAgLyoqXHJcbiAgICogSXMgUFJPTVBUIGZvY3VzZWRcclxuICAgKi9cclxuICBpc1Byb21wdEZvY3VzZWQgPSBmYWxzZTtcclxufVxyXG4iXX0=