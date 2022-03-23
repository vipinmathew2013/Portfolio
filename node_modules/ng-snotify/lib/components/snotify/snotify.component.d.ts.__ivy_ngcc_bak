import { OnDestroy, OnInit } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyToast } from '../../models/snotify-toast.model';
import { Subscription } from 'rxjs';
import { SnotifyNotifications } from '../../interfaces/snotify-notifications.interface';
import { SnotifyEvent } from '../../types/event.type';
export declare class SnotifyComponent implements OnInit, OnDestroy {
    private service;
    /**
     * Toasts array
     */
    notifications: SnotifyNotifications;
    /**
     * Toasts emitter
     */
    emitter: Subscription;
    /**
     * Helper for slice pipe (maxOnScreen)
     */
    dockSizeA: number;
    /**
     * Helper for slice pipe (maxOnScreen)
     */
    dockSizeB: number | undefined;
    /**
     * Helper for slice pipe (maxAtPosition)
     */
    blockSizeA: number;
    /**
     * Helper for slice pipe (maxAtPosition)
     */
    blockSizeB: number | undefined;
    /**
     * Backdrop Opacity
     */
    backdrop: number;
    /**
     * How many toasts with backdrop in current queue
     */
    withBackdrop: SnotifyToast[];
    constructor(service: SnotifyService);
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    ngOnInit(): void;
    /**
     * Changes the backdrop opacity
     * @param event SnotifyEvent
     */
    stateChanged(event: SnotifyEvent): void;
    /**
     * Split toasts toasts into different objects
     * @param toasts SnotifyToast[]
     * @returns SnotifyNotifications
     */
    splitToasts(toasts: SnotifyToast[]): SnotifyNotifications;
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy(): void;
}
