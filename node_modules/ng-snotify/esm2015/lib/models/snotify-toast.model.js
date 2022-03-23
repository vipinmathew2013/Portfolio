import { Subject } from 'rxjs';
import { SnotifyStyle } from '../enums/snotify-style.enum';
// @TODO remove method in observable way
/**
 * Toast main model
 */
export class SnotifyToast {
    constructor(id, title, body, config) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.config = config;
        /**
         * Emits SnotifyEvent
         */
        this.eventEmitter = new Subject();
        /**
         * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
         */
        this.eventsHolder = [];
        if (this.config.type === SnotifyStyle.prompt) {
            this.value = '';
        }
        this.on('hidden', () => {
            this.eventsHolder.forEach((subscription) => {
                subscription.unsubscribe();
            });
        });
    }
    /**
     * Subscribe to toast events
     * @returns this
     * @param event SnotifyEvent
     * @param action (toast: this) => void
     */
    on(event, action) {
        this.eventsHolder.push(this.eventEmitter.subscribe((e) => {
            if (e === event) {
                action(this);
            }
        }));
        return this;
    }
    /**
     * Tests if a toast equals this toast.
     * @returns boolean true then equals else false.
     * @param toast SnotifyToast
     */
    equals(toast) {
        return this.body === toast.body && this.title === toast.title && this.config.type === toast.config.type;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS10b2FzdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNub3RpZnkvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELHdDQUF3QztBQUN4Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBaUJ2QixZQUFtQixFQUFVLEVBQVMsS0FBYSxFQUFTLElBQVksRUFBUyxNQUEwQjtRQUF4RixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQWhCM0c7O1dBRUc7UUFDTSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBQ3BEOztXQUVHO1FBQ0ssaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBVXhDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQTBCLEVBQUUsRUFBRTtnQkFDdkQsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxFQUFFLENBQUMsS0FBbUIsRUFBRSxNQUE2QjtRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxLQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUcsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU25vdGlmeVRvYXN0Q29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zbm90aWZ5LXRvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU25vdGlmeUV2ZW50IH0gZnJvbSAnLi4vdHlwZXMvZXZlbnQudHlwZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTdHlsZSB9IGZyb20gJy4uL2VudW1zL3Nub3RpZnktc3R5bGUuZW51bSc7XHJcbi8vIEBUT0RPIHJlbW92ZSBtZXRob2QgaW4gb2JzZXJ2YWJsZSB3YXlcclxuLyoqXHJcbiAqIFRvYXN0IG1haW4gbW9kZWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbm90aWZ5VG9hc3Qge1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIFNub3RpZnlFdmVudFxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IGV2ZW50RW1pdHRlciA9IG5ldyBTdWJqZWN0PFNub3RpZnlFdmVudD4oKTtcclxuICAvKipcclxuICAgKiBIb2xkcyBhbGwgc3Vic2NyaWJlcnMgYmVjYXVzZSB3ZSBuZWVkIHRvIHVuc3Vic2NyaWJlIGZyb20gYWxsIGJlZm9yZSB0b2FzdCBnZXQgZGVzdHJveWVkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBldmVudHNIb2xkZXI6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgLyoqXHJcbiAgICogVG9hc3QgcHJvbXB0IHZhbHVlXHJcbiAgICovXHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUb2FzdCB2YWxpZGF0b3JcclxuICAgKi9cclxuICB2YWxpZDogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyBib2R5OiBzdHJpbmcsIHB1YmxpYyBjb25maWc6IFNub3RpZnlUb2FzdENvbmZpZykge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnR5cGUgPT09IFNub3RpZnlTdHlsZS5wcm9tcHQpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbignaGlkZGVuJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmV2ZW50c0hvbGRlci5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIHRvYXN0IGV2ZW50c1xyXG4gICAqIEByZXR1cm5zIHRoaXNcclxuICAgKiBAcGFyYW0gZXZlbnQgU25vdGlmeUV2ZW50XHJcbiAgICogQHBhcmFtIGFjdGlvbiAodG9hc3Q6IHRoaXMpID0+IHZvaWRcclxuICAgKi9cclxuICBvbihldmVudDogU25vdGlmeUV2ZW50LCBhY3Rpb246ICh0b2FzdDogdGhpcykgPT4gdm9pZCk6IHRoaXMge1xyXG4gICAgdGhpcy5ldmVudHNIb2xkZXIucHVzaChcclxuICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuc3Vic2NyaWJlKChlOiBTbm90aWZ5RXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZSA9PT0gZXZlbnQpIHtcclxuICAgICAgICAgIGFjdGlvbih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZXN0cyBpZiBhIHRvYXN0IGVxdWFscyB0aGlzIHRvYXN0LlxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gdHJ1ZSB0aGVuIGVxdWFscyBlbHNlIGZhbHNlLlxyXG4gICAqIEBwYXJhbSB0b2FzdCBTbm90aWZ5VG9hc3RcclxuICAgKi9cclxuICBlcXVhbHModG9hc3Q6IFNub3RpZnlUb2FzdCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9keSA9PT0gdG9hc3QuYm9keSAmJiB0aGlzLnRpdGxlID09PSB0b2FzdC50aXRsZSAmJiB0aGlzLmNvbmZpZy50eXBlID09PSB0b2FzdC5jb25maWcudHlwZTtcclxuICB9XHJcbn1cclxuIl19