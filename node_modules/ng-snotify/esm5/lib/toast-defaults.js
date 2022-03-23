var _a;
import { SnotifyPosition } from './enums/snotify-position.enum';
import { SnotifyStyle } from './enums/snotify-style.enum';
/**
 * Snotify default configuration object
 */
export var ToastDefaults = {
    global: {
        newOnTop: true,
        maxOnScreen: 8,
        maxAtPosition: 8,
        filterDuplicates: false
    },
    toast: {
        type: SnotifyStyle.simple,
        showProgressBar: true,
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        bodyMaxLength: 150,
        titleMaxLength: 16,
        backdrop: -1,
        icon: null,
        iconClass: null,
        html: null,
        position: SnotifyPosition.rightBottom,
        animation: { enter: 'fadeIn', exit: 'fadeOut', time: 400 }
    },
    type: (_a = {},
        _a[SnotifyStyle.prompt] = {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            placeholder: 'Enter answer here...',
            type: SnotifyStyle.prompt
        },
        _a[SnotifyStyle.confirm] = {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            type: SnotifyStyle.confirm
        },
        _a[SnotifyStyle.simple] = {
            type: SnotifyStyle.simple
        },
        _a[SnotifyStyle.success] = {
            type: SnotifyStyle.success
        },
        _a[SnotifyStyle.error] = {
            type: SnotifyStyle.error
        },
        _a[SnotifyStyle.warning] = {
            type: SnotifyStyle.warning
        },
        _a[SnotifyStyle.info] = {
            type: SnotifyStyle.info
        },
        _a[SnotifyStyle.async] = {
            pauseOnHover: false,
            closeOnClick: false,
            timeout: 0,
            showProgressBar: false,
            type: SnotifyStyle.async
        },
        _a)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL3RvYXN0LWRlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHO0lBQzNCLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxJQUFJO1FBQ2QsV0FBVyxFQUFFLENBQUM7UUFDZCxhQUFhLEVBQUUsQ0FBQztRQUNoQixnQkFBZ0IsRUFBRSxLQUFLO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQ3pCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLElBQUk7UUFDbEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLElBQUk7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxlQUFlLENBQUMsV0FBVztRQUNyQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtLQUMzRDtJQUNELElBQUk7UUFDRixHQUFDLFlBQVksQ0FBQyxNQUFNLElBQUc7WUFDckIsT0FBTyxFQUFFLENBQUM7WUFDVixZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtnQkFDeEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTthQUM5QztZQUNELFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNO1NBQzFCO1FBQ0QsR0FBQyxZQUFZLENBQUMsT0FBTyxJQUFHO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ3hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7YUFDOUM7WUFDRCxJQUFJLEVBQUUsWUFBWSxDQUFDLE9BQU87U0FDM0I7UUFDRCxHQUFDLFlBQVksQ0FBQyxNQUFNLElBQUc7WUFDckIsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNO1NBQzFCO1FBQ0QsR0FBQyxZQUFZLENBQUMsT0FBTyxJQUFHO1lBQ3RCLElBQUksRUFBRSxZQUFZLENBQUMsT0FBTztTQUMzQjtRQUNELEdBQUMsWUFBWSxDQUFDLEtBQUssSUFBRztZQUNwQixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDekI7UUFDRCxHQUFDLFlBQVksQ0FBQyxPQUFPLElBQUc7WUFDdEIsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPO1NBQzNCO1FBQ0QsR0FBQyxZQUFZLENBQUMsSUFBSSxJQUFHO1lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtTQUN4QjtRQUNELEdBQUMsWUFBWSxDQUFDLEtBQUssSUFBRztZQUNwQixZQUFZLEVBQUUsS0FBSztZQUNuQixZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsQ0FBQztZQUNWLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztTQUN6QjtXQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNub3RpZnlQb3NpdGlvbiB9IGZyb20gJy4vZW51bXMvc25vdGlmeS1wb3NpdGlvbi5lbnVtJztcclxuaW1wb3J0IHsgU25vdGlmeVN0eWxlIH0gZnJvbSAnLi9lbnVtcy9zbm90aWZ5LXN0eWxlLmVudW0nO1xyXG5cclxuLyoqXHJcbiAqIFNub3RpZnkgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRvYXN0RGVmYXVsdHMgPSB7XHJcbiAgZ2xvYmFsOiB7XHJcbiAgICBuZXdPblRvcDogdHJ1ZSxcclxuICAgIG1heE9uU2NyZWVuOiA4LFxyXG4gICAgbWF4QXRQb3NpdGlvbjogOCxcclxuICAgIGZpbHRlckR1cGxpY2F0ZXM6IGZhbHNlXHJcbiAgfSxcclxuICB0b2FzdDoge1xyXG4gICAgdHlwZTogU25vdGlmeVN0eWxlLnNpbXBsZSxcclxuICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICBib2R5TWF4TGVuZ3RoOiAxNTAsXHJcbiAgICB0aXRsZU1heExlbmd0aDogMTYsXHJcbiAgICBiYWNrZHJvcDogLTEsXHJcbiAgICBpY29uOiBudWxsLFxyXG4gICAgaWNvbkNsYXNzOiBudWxsLFxyXG4gICAgaHRtbDogbnVsbCxcclxuICAgIHBvc2l0aW9uOiBTbm90aWZ5UG9zaXRpb24ucmlnaHRCb3R0b20sXHJcbiAgICBhbmltYXRpb246IHsgZW50ZXI6ICdmYWRlSW4nLCBleGl0OiAnZmFkZU91dCcsIHRpbWU6IDQwMCB9XHJcbiAgfSxcclxuICB0eXBlOiB7XHJcbiAgICBbU25vdGlmeVN0eWxlLnByb21wdF06IHtcclxuICAgICAgdGltZW91dDogMCxcclxuICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgIHsgdGV4dDogJ09rJywgYWN0aW9uOiBudWxsLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnQ2FuY2VsJywgYWN0aW9uOiBudWxsLCBib2xkOiBmYWxzZSB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgYW5zd2VyIGhlcmUuLi4nLFxyXG4gICAgICB0eXBlOiBTbm90aWZ5U3R5bGUucHJvbXB0XHJcbiAgICB9LFxyXG4gICAgW1Nub3RpZnlTdHlsZS5jb25maXJtXToge1xyXG4gICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnT2snLCBhY3Rpb246IG51bGwsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICB7IHRleHQ6ICdDYW5jZWwnLCBhY3Rpb246IG51bGwsIGJvbGQ6IGZhbHNlIH1cclxuICAgICAgXSxcclxuICAgICAgdHlwZTogU25vdGlmeVN0eWxlLmNvbmZpcm1cclxuICAgIH0sXHJcbiAgICBbU25vdGlmeVN0eWxlLnNpbXBsZV06IHtcclxuICAgICAgdHlwZTogU25vdGlmeVN0eWxlLnNpbXBsZVxyXG4gICAgfSxcclxuICAgIFtTbm90aWZ5U3R5bGUuc3VjY2Vzc106IHtcclxuICAgICAgdHlwZTogU25vdGlmeVN0eWxlLnN1Y2Nlc3NcclxuICAgIH0sXHJcbiAgICBbU25vdGlmeVN0eWxlLmVycm9yXToge1xyXG4gICAgICB0eXBlOiBTbm90aWZ5U3R5bGUuZXJyb3JcclxuICAgIH0sXHJcbiAgICBbU25vdGlmeVN0eWxlLndhcm5pbmddOiB7XHJcbiAgICAgIHR5cGU6IFNub3RpZnlTdHlsZS53YXJuaW5nXHJcbiAgICB9LFxyXG4gICAgW1Nub3RpZnlTdHlsZS5pbmZvXToge1xyXG4gICAgICB0eXBlOiBTbm90aWZ5U3R5bGUuaW5mb1xyXG4gICAgfSxcclxuICAgIFtTbm90aWZ5U3R5bGUuYXN5bmNdOiB7XHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgIHRpbWVvdXQ6IDAsXHJcbiAgICAgIHNob3dQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIHR5cGU6IFNub3RpZnlTdHlsZS5hc3luY1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19