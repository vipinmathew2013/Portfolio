import { SnotifyStyle } from '../enums/snotify-style.enum';
/**
 * Transform arguments to Snotify object
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns Snotify
 */
export function TransformArgument(target, propertyKey, descriptor) {
    if (propertyKey === SnotifyStyle.async) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLWFyZ3VtZW50LmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNub3RpZnkvIiwic291cmNlcyI6WyJsaWIvZGVjb3JhdG9ycy90cmFuc2Zvcm0tYXJndW1lbnQuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBVyxFQUFFLFdBQXdCLEVBQUUsVUFBOEI7SUFDckcsSUFBSSxXQUFXLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBRTtRQUN0QyxPQUFPO1lBQ0wsS0FBSyxFQUFMO2dCQUFNLGNBQWM7cUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztvQkFBZCx5QkFBYzs7Z0JBQ2xCLElBQUksTUFBTSxDQUFDO2dCQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3JCLE1BQU0sR0FBRzt3QkFDUCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDYixNQUFNLEVBQUUsSUFBSTt3QkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDaEIsQ0FBQztpQkFDSDtxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTt3QkFDL0IsTUFBTSxHQUFHOzRCQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNiLE1BQU0sRUFBRSxJQUFJOzRCQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNoQixDQUFDO3FCQUNIO3lCQUFNO3dCQUNMLE1BQU0sR0FBRzs0QkFDUCxLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDaEIsQ0FBQztxQkFDSDtpQkFDRjtxQkFBTTtvQkFDTCxNQUFNLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ2hCLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1NBQ0YsQ0FBQztLQUNIO1NBQU07UUFDTCxPQUFPO1lBQ0wsS0FBSyxFQUFMOztnQkFBTSxjQUFjO3FCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7b0JBQWQseUJBQWM7O2dCQUNsQixJQUFJLE1BQU0sQ0FBQztnQkFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNyQixNQUFNLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsTUFBTSxFQUFFLElBQUk7cUJBQ2IsQ0FBQztpQkFDSDtxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ2hCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTTs0QkFDSixLQUFLLEVBQUUsSUFBSTs0QkFDWCxNQUFNLEVBQUUsSUFBSTs0QkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7d0JBQ2IsR0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7MkJBQzVELENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1NBQ0YsQ0FBQztLQUNIO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNub3RpZnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nub3RpZnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVR5cGUgfSBmcm9tICcuLi90eXBlcy9zbm90aWZ5LnR5cGUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5U3R5bGUgfSBmcm9tICcuLi9lbnVtcy9zbm90aWZ5LXN0eWxlLmVudW0nO1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybSBhcmd1bWVudHMgdG8gU25vdGlmeSBvYmplY3RcclxuICogQHBhcmFtIHRhcmdldCBhbnlcclxuICogQHBhcmFtIHByb3BlcnR5S2V5IFNub3RpZnlUeXBlXHJcbiAqIEBwYXJhbSBkZXNjcmlwdG9yIFByb3BlcnR5RGVzY3JpcHRvclxyXG4gKiBAcmV0dXJucyBTbm90aWZ5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtQXJndW1lbnQodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBTbm90aWZ5VHlwZSwgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgaWYgKHByb3BlcnR5S2V5ID09PSBTbm90aWZ5U3R5bGUuYXN5bmMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgIGJvZHk6IGFyZ3NbMF0sXHJcbiAgICAgICAgICAgIGNvbmZpZzogbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uOiBhcmdzWzFdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBhcmdzWzFdLFxyXG4gICAgICAgICAgICAgIGJvZHk6IGFyZ3NbMF0sXHJcbiAgICAgICAgICAgICAgY29uZmlnOiBudWxsLFxyXG4gICAgICAgICAgICAgIGFjdGlvbjogYXJnc1syXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAgIGJvZHk6IGFyZ3NbMF0sXHJcbiAgICAgICAgICAgICAgY29uZmlnOiBhcmdzWzJdLFxyXG4gICAgICAgICAgICAgIGFjdGlvbjogYXJnc1sxXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBhcmdzWzFdLFxyXG4gICAgICAgICAgICBib2R5OiBhcmdzWzBdLFxyXG4gICAgICAgICAgICBjb25maWc6IGFyZ3NbM10sXHJcbiAgICAgICAgICAgIGFjdGlvbjogYXJnc1syXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWUuYXBwbHkodGhpcywgW3Jlc3VsdCBhcyBTbm90aWZ5XSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgIGJvZHk6IGFyZ3NbMF0sXHJcbiAgICAgICAgICAgIGNvbmZpZzogbnVsbFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBhcmdzWzFdLFxyXG4gICAgICAgICAgICBib2R5OiBhcmdzWzBdLFxyXG4gICAgICAgICAgICBjb25maWc6IGFyZ3NbMl1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbmZpZzogbnVsbCxcclxuICAgICAgICAgICAgYm9keTogYXJnc1swXSxcclxuICAgICAgICAgICAgW3R5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJyA/ICd0aXRsZScgOiAnY29uZmlnJ106IGFyZ3NbMV1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlLmFwcGx5KHRoaXMsIFtyZXN1bHQgYXMgU25vdGlmeV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=