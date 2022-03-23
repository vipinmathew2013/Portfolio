import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var TruncatePipe = /** @class */ (function () {
    /**
     * Truncate toast text pipe
     */
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var limit = 40;
        var trail = '...';
        if (args.length > 0) {
            limit = args.length > 0 ? parseInt(args[0], 10) : limit;
            trail = args.length > 1 ? args[1] : trail;
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Pipe({
            name: 'truncate'
        })
        /**
         * Truncate toast text pipe
         */
    ], TruncatePipe);
    return TruncatePipe;
}());
export { TruncatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNub3RpZnkvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvdHJ1bmNhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFTcEQ7SUFIQTs7T0FFRztJQUNIO0lBV0EsQ0FBQztJQVZDLGdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQUUsY0FBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLDZCQUFtQjs7UUFDMUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEQsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMzQztRQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFWVSxZQUFZO1FBUHhCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7UUFFRjs7V0FFRztPQUNVLFlBQVksQ0FXeEI7SUFBRCxtQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RydW5jYXRlJ1xyXG59KVxyXG5cclxuLyoqXHJcbiAqIFRydW5jYXRlIHRvYXN0IHRleHQgcGlwZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCAuLi5hcmdzOiBBcnJheTxhbnk+KTogYW55IHtcclxuICAgIGxldCBsaW1pdCA9IDQwO1xyXG4gICAgbGV0IHRyYWlsID0gJy4uLic7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxpbWl0ID0gYXJncy5sZW5ndGggPiAwID8gcGFyc2VJbnQoYXJnc1swXSwgMTApIDogbGltaXQ7XHJcbiAgICAgIHRyYWlsID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IHRyYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCkgKyB0cmFpbCA6IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=