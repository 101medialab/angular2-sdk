import { ElementRef, OnChanges, OnDestroy } from '@angular/core';
import 'perfect-scrollbar/src/js/adaptor/jquery';
export declare class HbPerfectScroll implements OnChanges, OnDestroy {
    options: any;
    private $el;
    constructor(elemRef: ElementRef);
    ngOnChanges(change: any): void;
    onReadyToInitialize(): void;
    ngOnDestroy(): void;
}
