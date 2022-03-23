/**
 * Generates random id
 * @return number
 */
export declare function uuid(): number;
/**
 * Simple is object check.
 * @param item Object<any>
 * @returns boolean
 */
export declare function isObject(item: any): boolean;
/**
 * Deep merge objects.
 * @param sources Array<Object<any>>
 * @returns Object<any>
 */
export declare function mergeDeep(...sources: any[]): {};
export declare function animate(start: number, duration: number, callback: (currentValue: number, progress: number) => {}): void;
