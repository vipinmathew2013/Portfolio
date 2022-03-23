import { AfterContentInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyToast } from '../../models/snotify-toast.model';
import { Subscription } from 'rxjs';
import { SnotifyEvent } from '../../types/event.type';
import { SnotifyStyle } from '../../enums/snotify-style.enum';
export declare class ToastComponent implements OnInit, OnDestroy, AfterContentInit {
    private service;
    /**
     * Get toast from notifications array
     */
    toast: SnotifyToast;
    stateChanged: EventEmitter<SnotifyEvent>;
    toastDeletedSubscription: Subscription;
    toastChangedSubscription: Subscription;
    /**
     * requestAnimationFrame id
     */
    animationFrame: number;
    /**
     * Toast state
     */
    state: {
        paused: boolean;
        progress: number;
        animation: string;
        isDestroying: boolean;
        promptType: SnotifyStyle;
    };
    constructor(service: SnotifyService);
    /**
     * Init base options. Subscribe to toast changed, toast deleted
     */
    ngOnInit(): void;
    ngAfterContentInit(): void;
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy(): void;
    /**
     * Trigger OnClick lifecycle
     */
    onClick(): void;
    /**
     * Trigger beforeDestroy lifecycle. Removes toast
     */
    onRemove(): void;
    /**
     * Trigger onHoverEnter lifecycle
     */
    onMouseEnter(): void;
    /**
     * Trigger onHoverLeave lifecycle
     */
    onMouseLeave(): void;
    /**
     * Remove toast completely after animation
     */
    onExitTransitionEnd(): void;
    /**
     * Initialize base toast config
     *
     */
    initToast(): void;
    /**
     * Start progress bar
     * @param startTime number
     */
    startTimeout(startTime?: number): void;
}
