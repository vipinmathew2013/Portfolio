import { __assign } from "tslib";
/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType(target, propertyKey, descriptor) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXRvYXN0LXR5cGUuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL3NldC10b2FzdC10eXBlLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFXLEVBQUUsV0FBd0IsRUFBRSxVQUE4QjtJQUNoRyxPQUFPO1FBQ0wsS0FBSyxFQUFMO1lBQU0sY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFhLENBQUMsTUFBTSx5QkFDckIsSUFBSSxDQUFDLENBQUMsQ0FBYSxDQUFDLE1BQU0sS0FDOUIsSUFBSSxFQUFFLFdBQVcsR0FDbEIsQ0FBQztZQUNGLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNub3RpZnlUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc25vdGlmeS50eXBlJztcclxuaW1wb3J0IHsgU25vdGlmeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc25vdGlmeS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdG9hc3Qgc3R5bGUgZGVwZW5kaW5nIG9uIG1ldGhvZCBuYW1lXHJcbiAqIEBwYXJhbSB0YXJnZXQgYW55XHJcbiAqIEBwYXJhbSBwcm9wZXJ0eUtleSBTbm90aWZ5VHlwZVxyXG4gKiBAcGFyYW0gZGVzY3JpcHRvciBQcm9wZXJ0eURlc2NyaXB0b3JcclxuICogQHJldHVybnMgdmFsdWU6ICgoLi4uYXJnczogYW55W10pID0+IGFueSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXRUb2FzdFR5cGUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBTbm90aWZ5VHlwZSwgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHZhbHVlKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIChhcmdzWzBdIGFzIFNub3RpZnkpLmNvbmZpZyA9IHtcclxuICAgICAgICAuLi4oYXJnc1swXSBhcyBTbm90aWZ5KS5jb25maWcsXHJcbiAgICAgICAgdHlwZTogcHJvcGVydHlLZXlcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=