import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
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
        Pipe({
            name: 'keys',
            pure: false
        })
        /**
         * Extract object keys pipe
         */
    ], KeysPipe);
    return KeysPipe;
}());
export { KeysPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9rZXlzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBU3BEO0lBSEE7O09BRUc7SUFDSDtJQU9BLENBQUM7SUFOQyw0QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQWtCO1FBQWxCLHFCQUFBLEVBQUEsV0FBa0I7UUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQU5VLFFBQVE7UUFQcEIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7UUFDRjs7V0FFRztPQUNVLFFBQVEsQ0FPcEI7SUFBRCxlQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAna2V5cycsXHJcbiAgcHVyZTogZmFsc2VcclxufSlcclxuLyoqXHJcbiAqIEV4dHJhY3Qgb2JqZWN0IGtleXMgcGlwZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueVtdID0gbnVsbCk6IGFueSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==