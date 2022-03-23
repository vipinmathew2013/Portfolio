import { SnotifyType } from '../types/snotify.type';
/**
 * Transform arguments to Snotify object
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns Snotify
 */
export declare function TransformArgument(target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor): {
    value(...args: any[]): any;
};
