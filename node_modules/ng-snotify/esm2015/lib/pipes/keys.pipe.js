import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
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
export { KeysPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9rZXlzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBU3BELElBQWEsUUFBUTtBQUhyQjs7R0FFRztBQUNILE1BQWEsUUFBUTtJQUNuQixTQUFTLENBQUMsS0FBVSxFQUFFLE9BQWMsSUFBSTtRQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQVBZLFFBQVE7SUFQcEIsSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7SUFDRjs7T0FFRztHQUNVLFFBQVEsQ0FPcEI7U0FQWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrZXlzJyxcclxuICBwdXJlOiBmYWxzZVxyXG59KVxyXG4vKipcclxuICogRXh0cmFjdCBvYmplY3Qga2V5cyBwaXBlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19