import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
    return PromptComponent;
}());
export { PromptComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNub3RpZnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhN0Y7SUFIQTs7T0FFRztJQUNIO1FBS0U7O1dBRUc7UUFDSCxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBTFU7UUFBUixLQUFLLEVBQUU7a0RBQXFCO0lBSmxCLGVBQWU7UUFWM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixzbkJBQXNDO1lBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7UUFFRjs7V0FFRztPQUNVLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1zbm90aWZ5LXByb21wdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFByb21wdCBjb21wb25lbnQuIFBhcnQgb2YgUFJPTVBUIHR5cGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9tcHRDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEdldCBQUk9NUFQgcGxhY2Vob2xkZXJcclxuICAgKi9cclxuICBASW5wdXQoKSB0b2FzdDogU25vdGlmeVRvYXN0O1xyXG4gIC8qKlxyXG4gICAqIElzIFBST01QVCBmb2N1c2VkXHJcbiAgICovXHJcbiAgaXNQcm9tcHRGb2N1c2VkID0gZmFsc2U7XHJcbn1cclxuIl19