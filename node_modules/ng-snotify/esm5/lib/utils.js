/**
 * Generates random id
 * @return number
 */
export function uuid() {
    return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}
/**
 * Simple is object check.
 * @param item Object<any>
 * @returns boolean
 */
export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge objects.
 * @param sources Array<Object<any>>
 * @returns Object<any>
 */
export function mergeDeep() {
    var _a;
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var target = {};
    if (!sources.length) {
        return target;
    }
    while (sources.length > 0) {
        var source = sources.shift();
        if (isObject(source)) {
            for (var key in source) {
                if (isObject(source[key])) {
                    target[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_a = {}, _a[key] = source[key], _a));
                }
            }
        }
    }
    return target;
}
export function animate(start, duration, callback) {
    var endTime;
    requestAnimationFrame(function (timestamp) { return (endTime = timestamp + duration); });
    var calculate = function () {
        requestAnimationFrame(function (timestamp) {
            var runtime = timestamp - endTime;
            var progress = Math.min(runtime / duration, 1) + start;
            if (runtime < duration) {
                if (callback(+(100 * progress).toFixed(2), progress)) {
                    calculate();
                }
            }
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILE1BQU0sVUFBVSxJQUFJO0lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQUk7SUFDM0IsT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTOztJQUFDLGlCQUFVO1NBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtRQUFWLDRCQUFVOztJQUNsQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbkIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ25EO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFJLEdBQUMsR0FBRyxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLFFBQXdEO0lBQy9HLElBQUksT0FBTyxDQUFDO0lBQ1oscUJBQXFCLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUNyRSxJQUFNLFNBQVMsR0FBRztRQUNoQixxQkFBcUIsQ0FBQyxVQUFBLFNBQVM7WUFDN0IsSUFBTSxPQUFPLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUNwQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksT0FBTyxHQUFHLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQ3BELFNBQVMsRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2VuZXJhdGVzIHJhbmRvbSBpZFxyXG4gKiBAcmV0dXJuIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKERhdGUubm93KCkgLSAxKSkgKyAxO1xyXG59XHJcblxyXG4vKipcclxuICogU2ltcGxlIGlzIG9iamVjdCBjaGVjay5cclxuICogQHBhcmFtIGl0ZW0gT2JqZWN0PGFueT5cclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pOiBib29sZWFuIHtcclxuICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWVwIG1lcmdlIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBzb3VyY2VzIEFycmF5PE9iamVjdDxhbnk+PlxyXG4gKiBAcmV0dXJucyBPYmplY3Q8YW55PlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCguLi5zb3VyY2VzKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0ge307XHJcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9XHJcblxyXG4gIHdoaWxlIChzb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoc3RhcnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6IChjdXJyZW50VmFsdWU6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcikgPT4ge30pIHtcclxuICBsZXQgZW5kVGltZTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXN0YW1wID0+IChlbmRUaW1lID0gdGltZXN0YW1wICsgZHVyYXRpb24pKTtcclxuICBjb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZXN0YW1wID0+IHtcclxuICAgICAgY29uc3QgcnVudGltZSA9IHRpbWVzdGFtcCAtIGVuZFRpbWU7XHJcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4ocnVudGltZSAvIGR1cmF0aW9uLCAxKSArIHN0YXJ0O1xyXG4gICAgICBpZiAocnVudGltZSA8IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKCsoMTAwICogcHJvZ3Jlc3MpLnRvRml4ZWQoMiksIHByb2dyZXNzKSkge1xyXG4gICAgICAgICAgY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==