import { SnotifyType } from '../types/snotify.type';
/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export declare function SetToastType(target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor): {
    value(...args: any[]): any;
};
