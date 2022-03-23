import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SnotifyComponent } from './components/snotify/snotify.component';
import { SnotifyService } from './services/snotify.service';
import { KeysPipe } from './pipes/keys.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { ToastComponent } from './components/toast/toast.component';
var SnotifyModule = /** @class */ (function () {
    function SnotifyModule() {
    }
    SnotifyModule_1 = SnotifyModule;
    SnotifyModule.forRoot = function () {
        return {
            ngModule: SnotifyModule_1,
            providers: [SnotifyService]
        };
    };
    var SnotifyModule_1;
    SnotifyModule = SnotifyModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
            exports: [SnotifyComponent, TruncatePipe, KeysPipe]
        })
    ], SnotifyModule);
    return SnotifyModule;
}());
export { SnotifyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL3Nub3RpZnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9wRTtJQUFBO0lBT0EsQ0FBQztzQkFQWSxhQUFhO0lBQ2pCLHFCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzVCLENBQUM7SUFDSixDQUFDOztJQU5VLGFBQWE7UUFMekIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQztZQUMzRyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDO1NBQ3BELENBQUM7T0FDVyxhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbm90aWZ5L3Nub3RpZnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU25vdGlmeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Nub3RpZnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVuY2F0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RydW5jYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTbm90aWZ5Q29tcG9uZW50LCBUb2FzdENvbXBvbmVudCwgVHJ1bmNhdGVQaXBlLCBCdXR0b25zQ29tcG9uZW50LCBQcm9tcHRDb21wb25lbnQsIEtleXNQaXBlXSxcclxuICBleHBvcnRzOiBbU25vdGlmeUNvbXBvbmVudCwgVHJ1bmNhdGVQaXBlLCBLZXlzUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNub3RpZnlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U25vdGlmeU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNub3RpZnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1Nub3RpZnlTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19