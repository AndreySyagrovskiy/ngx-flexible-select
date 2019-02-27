import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { eventHub } from './event-hub';
import { findAncestor } from './dom-lib';

@Component({
  selector: 'ngx-flexible-select-button',
  templateUrl: './ngx-flexible-select-button.component.html',
})
export class NgxFlexibleSelectButtonComponent implements OnInit, OnDestroy {
  selectId: string;

  constructor(private el: ElementRef) { }

  ngOnDestroy() {
    eventHub.$emit('ngx-flexible-select-option.destroyed',
      {
        option: this,
        selectId: this.selectId,
      }
    );
  }

  ngOnInit() {
    setTimeout(
      () => {
        const el = findAncestor(this.el.nativeElement, '.ngx-flexible-select__options-wraped');
        if (el) {
          this.selectId = el.getAttribute('id');
        }


        eventHub.$emit('ngx-flexible-select-option.mounted',
          {
            option: this,
            selectId: this.selectId,
          }
        );

        this.el.nativeElement
          .querySelector('button')
          .addEventListener('click', () => {
            eventHub.$emit('ngx-flexible-select-button.clicked',
              {
                selectId: this.selectId,
              }
            );
          });
      }, 0);
  }

  onEnter(event) {
    this.el.nativeElement
      .querySelector('button')
      .click()
    ;

    return true;
  }

}
