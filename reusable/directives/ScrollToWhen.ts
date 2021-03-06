import {Directive, Input, ElementRef, OnChanges} from '@angular/core';
import {Status} from '../modules/status.svc';
import {BaseComponent} from '../../HbComponent/BaseComponent';

@Directive({
    selector: '[scrollToWhen]'
})
export class ScrollToWhen extends BaseComponent implements OnChanges {
    private $el;
    private isInitialize: boolean = false;
    @Input('scrollToWhen') private data: any;

    constructor(
        status: Status,
        private el: ElementRef
    ) {
        super(status);

        this.$el = $(this.el.nativeElement);
    }

    scrollOnce() {
        let scrollTo =
            'scrollTo' in this.data ?
                this.data.scrollTo :
                'childTarget' in this.data ?
                    this.$el.find(this.data.childTarget).scrollTop()
                    : null;

        if (scrollTo === null) {
            console.error('Directive ScrollToWhen cannot resolve scrollTo.', this, this.data);
        }

        this.$el.scrollTop(scrollTo);
    }

    ngAfterViewInit() {
        this.scrollOnce();
    }

    ngOnChanges({data}: {data: any}) {
        if (!this.isInitialize) {
            this.data = data.currentValue;

            if ('triggerNow' in this.data && this.data.triggerNow) {
                this.scrollOnce();
            }

            this.listen(this.data.event, [() => {
                this.scrollOnce();
            }], true);

            this.isInitialize = true;
        }
    }
}