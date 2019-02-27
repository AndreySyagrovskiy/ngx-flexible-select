import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { eventHub } from './event-hub';
import { findAncestor } from './dom-lib';

@Component({
  selector: 'ngx-flexible-select-option',
  templateUrl: './ngx-flexible-select-option.html',
})
export class NgxFlexibleSelectOptionComponent implements OnInit, OnDestroy {
  @Input() value;
  isSelected: boolean;
  selectId: string;

  constructor(private el: ElementRef) { }

  keyDown(event) {
    switch (event.keyCode) {
      case 13:
        this.selectValue(event);
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  }

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
      }, 0);
  }

  selectValue(event) {
    eventHub.$emit('ngx-flexible-select-option.selected',
      {
        value: this.value,
        selectId: this.selectId,
      }
    );
    this.isSelected = true;
  }
}

