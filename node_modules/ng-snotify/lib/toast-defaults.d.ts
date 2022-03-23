import { SnotifyPosition } from './enums/snotify-position.enum';
import { SnotifyStyle } from './enums/snotify-style.enum';
/**
 * Snotify default configuration object
 */
export declare const ToastDefaults: {
    global: {
        newOnTop: boolean;
        maxOnScreen: number;
        maxAtPosition: number;
        filterDuplicates: boolean;
    };
    toast: {
        type: SnotifyStyle;
        showProgressBar: boolean;
        timeout: number;
        closeOnClick: boolean;
        pauseOnHover: boolean;
        bodyMaxLength: number;
        titleMaxLength: number;
        backdrop: number;
        icon: any;
        iconClass: any;
        html: any;
        position: SnotifyPosition;
        animation: {
            enter: string;
            exit: string;
            time: number;
        };
    };
    type: {
        prompt: {
            timeout: number;
            closeOnClick: boolean;
            buttons: {
                text: string;
                action: any;
                bold: boolean;
            }[];
            placeholder: string;
            type: SnotifyStyle;
        };
        confirm: {
            timeout: number;
            closeOnClick: boolean;
            buttons: {
                text: string;
                action: any;
                bold: boolean;
            }[];
            type: SnotifyStyle;
        };
        simple: {
            type: SnotifyStyle;
        };
        success: {
            type: SnotifyStyle;
        };
        error: {
            type: SnotifyStyle;
        };
        warning: {
            type: SnotifyStyle;
        };
        info: {
            type: SnotifyStyle;
        };
        async: {
            pauseOnHover: boolean;
            closeOnClick: boolean;
            timeout: number;
            showProgressBar: boolean;
            type: SnotifyStyle;
        };
    };
};
