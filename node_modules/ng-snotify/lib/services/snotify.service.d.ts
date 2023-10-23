import { Observable, Subject } from 'rxjs';
import { SnotifyToastConfig } from '../interfaces/snotify-toast-config.interface';
import { Snotify } from '../interfaces/snotify.interface';
import { SafeHtml } from '@angular/platform-browser';
import { SnotifyDefaults } from '../interfaces/snotify-defaults.interface';
import { SnotifyToast } from '../models/snotify-toast.model';
/**
 * SnotifyService - create, remove, config toasts
 */
export declare class SnotifyService {
    config: SnotifyDefaults;
    readonly emitter: Subject<SnotifyToast[]>;
    readonly toastChanged: Subject<SnotifyToast>;
    readonly toastDeleted: Subject<number>;
    private notifications;
    constructor(config: SnotifyDefaults);
    /**
     * emit changes in notifications array
     */
    private emit;
    /**
     * returns SnotifyToast object
     * @param id Number
     * @return SnotifyToast|undefined
     */
    get(id: number): SnotifyToast;
    /**
     * add SnotifyToast to notifications array
     * @param toast SnotifyToast
     */
    private add;
    /**
     * checks if the toast is in the collection.
     * @param inToast SnotifyToast
     * @returns boolean
     */
    private containsToast;
    /**
     * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
     * @param id number
     * @param remove boolean
     */
    remove(id?: number, remove?: boolean): void;
    /**
     * Clear notifications array
     */
    clear(): void;
    /**
     * Creates toast and add it to array, returns toast id
     * @param snotify Snotify
     * @return number
     */
    create(snotify: Snotify): SnotifyToast;
    setDefaults(defaults: SnotifyDefaults): SnotifyDefaults;
    /**
     * Create toast with simple style returns toast id;
     * @param body string
     * @returns number
     */
    simple(body: string): SnotifyToast;
    /**
     * Create toast with simple style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    simple(body: string, title: string): SnotifyToast;
    /**
     * Create toast with simple style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    simple(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with simple style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    simple(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with success style returns toast id;
     * @param body string
     * @returns number
     */
    success(body: string): SnotifyToast;
    /**
     * Create toast with success style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    success(body: string, title: string): SnotifyToast;
    /**
     * Create toast with success style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    success(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with success style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    success(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with error style returns toast id;
     * @param body string
     * @returns number
     */
    error(body: string): SnotifyToast;
    /**
     * Create toast with error style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    error(body: string, title: string): SnotifyToast;
    /**
     * Create toast with error style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    error(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with error style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    error(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with info style returns toast id;
     * @param body string
     * @returns number
     */
    info(body: string): SnotifyToast;
    /**
     * Create toast with info style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    info(body: string, title: string): SnotifyToast;
    /**
     * Create toast with info style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    info(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with info style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    info(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with warning style returns toast id;
     * @param body string
     * @returns number
     */
    warning(body: string): SnotifyToast;
    /**
     * Create toast with warning style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    warning(body: string, title: string): SnotifyToast;
    /**
     * Create toast with warning style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    warning(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with warning style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    warning(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with confirm style returns toast id;
     * @param body string
     * @returns number
     */
    confirm(body: string): SnotifyToast;
    /**
     * Create toast with confirm style returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    confirm(body: string, title: string): SnotifyToast;
    /**
     * Create toast with confirm style returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    confirm(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with confirm style  returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    confirm(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with Prompt style with two buttons, returns toast id;
     * @param body string
     * @returns number
     */
    prompt(body: string): SnotifyToast;
    /**
     * Create toast with Prompt style with two buttons, returns toast id;
     * @param body string
     * @param title string
     * @returns number
     */
    prompt(body: string, title: string): SnotifyToast;
    /**
     * Create toast with Prompt style with two buttons, returns toast id;
     * @param body string
     * @param config SnotifyToastConfig
     * @returns number
     */
    prompt(body: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Create toast with Prompt style with two buttons, returns toast id;
     * @param [body] string
     * @param [title] string
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    prompt(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Creates async toast with Info style. Pass action, and resolve or reject it.
     * @param body string
     * @param action Promise<Snotify> | Observable<Snotify>
     * @returns number
     */
    async(body: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast;
    /**
     * Creates async toast with Info style. Pass action, and resolve or reject it.
     * @param body string
     * @param title string
     * @param action Promise<Snotify> | Observable<Snotify>
     * @returns number
     */
    async(body: string, title: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast;
    /**
     * Creates async toast with Info style. Pass action, and resolve or reject it.
     * @param body string
     * @param action Promise<Snotify> | Observable<Snotify>
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    async(body: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyToastConfig): SnotifyToast;
    /**
     * Creates async toast with Info style. Pass action, and resolve or reject it.
     * @param body string
     * @param title string
     * @param action Promise<Snotify> | Observable<Snotify>
     * @param [config] SnotifyToastConfig
     * @returns number
     */
    async(body: string, title: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyToastConfig): SnotifyToast;
    private mergeToast;
    /**
     * Creates empty toast with html string inside
     * @param html string | SafeHtml
     * @param config SnotifyToastConfig
     * @returns number
     */
    html(html: string | SafeHtml, config?: SnotifyToastConfig): SnotifyToast;
}
