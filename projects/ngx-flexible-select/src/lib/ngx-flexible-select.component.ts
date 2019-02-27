import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ViewEncapsulation,
  OnDestroy,
  HostListener,
  ChangeDetectorRef
} from '@angular/core';
import { eventHub } from './event-hub';
import { getOffset, hasPositioFixedAncestor, isMob, addClass, removeClass, findAncestor, hasClass } from './dom-lib';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-flexible-select',
  templateUrl: './ngx-flexible-select.component.html',
  styleUrls: ['./ngx-flexible-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxFlexibleSelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxFlexibleSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() more = false;
  @Input() needFocusInpOnTab = false;
  @Input() optionsWrapClass = '';
  @Input() pending = false;
  @Output() loadMore: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  isFocusSearh = false;
  isOpened = false;
  isNeedHideOption = false;
  hasAncesroFixed = false;
  options: any[] = [];
  @Input() value: any;
  selectId = '';
  @Input() selectDisabled = false;

  get elN() {
    return this.el.nativeElement;
  }

  get selected() {
    return this.value;
  }

  set selected(val) {
    this.value = val;
    this.propagateChange(this.value);
    this.change.emit(val);
  }

  private beforeSetValueFocus = true;
  private selectContainerEl: HTMLElement;
  private inputEl: any;
  private isMob: boolean;
  private onButtonClick: any;
  private onDocumentSctoll: any;
  private onOptionDestroyed: any;
  private onOptionMounted: any;
  private optionsHeightBefore = 0;
  private onOpenedSelect: any;
  private onScroll: any;
  private optionsMutationObserver: MutationObserver;
  private optionSelectedCallback: any;
  private runOnResize: any;
  private runOnWindowClick: any;
  private selectOptionsEl: HTMLElement;
  private selectOptionsoContainerEl: HTMLElement;
  private selectOptionsWrapEl: HTMLElement;

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  @HostListener('focus', ['$event'])
  onClick($event) {
    const el = this.elN.querySelector('.ngx-flexible-select__search-input');
    el.focus();
  }

  blurSearch() {
    this.isFocusSearh = false;
  }

  keyDown(event) {
    switch (event.keyCode) {
      case 40:
        this.keyArrowDown(event);
        break;
      case 38:
        this.keyArrowUp(event);
        break;
      case 27:
        this.close();
        const searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input');
        if (searchInpitEl) {
          searchInpitEl.focus();
        }
        break;
      case 13:
        if (!this.isOpened) {
          this.makeOpen();
        } else if (!this.selected) {
          const option: any = document.querySelector(`#${this.selectId} .ngx-flexible-select-option`);
          if (option) {
            option.click();
          }
        } else {
          this.close();
        }

        event.preventDefault();
        break;
      case 9:
        setTimeout(() => this.close(), 100);

        break;
      default: {
        if (this.inputEl && this.inputEl !== document.activeElement) {
        }
      }
    }
  }

  keyPress(event) {
    if (
      event.keyCode !== 40 &&
      event.keyCode !== 38 &&
      event.keyCode !== 27 &&
      event.keyCode !== 13 &&
      event.keyCode !== 9 &&
      this.inputEl &&
      this.inputEl !== document.activeElement
    ) {
      this.isOpened = true;
      // addClass(this.elN, 'ngx-flexible-select_opened');

      this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
      eventHub.$emit('ngx-flexible-select-option.opened', {
        selectId: this.selectId
      });

      setTimeout(() => {
        if (this.inputEl) {
          this.inputEl.focus();
        }
      }, 100);

      this.calculatePositionAnsSize();

      event = event || window.event;
      const charCode = event.which || event.keyCode;
      const charTyped = String.fromCharCode(charCode);
      if (/[\wА-Яа-яїєЇЄь]/.test(charTyped)) {
        this.inputEl.selected = charTyped;
      } else {
        this.inputEl.selected = '';
      }

      const eventntInput = new Event('input');
      this.inputEl.dispatchEvent(eventntInput);

      eventHub.$emit('ngx-flexible-select.opened', { idSelect: this.selectId });
    }
  }

  ngOnDestroy() {
    document.body.removeChild(this.selectOptionsWrapEl);
    document.removeEventListener('scroll', this.onScroll, true);
    window.removeEventListener('click', this.runOnWindowClick);
    window.removeEventListener('resize', this.runOnResize);
    eventHub.$off('ngx-flexible-select-option.selected', this.optionSelectedCallback);
    eventHub.$off('ngx-flexible-select-option.mounted', this.onOptionMounted);
    eventHub.$off('ngx-flexible-select-option.destroyed', this.onOptionDestroyed);
    eventHub.$off('ngx-flexible-select.opened', this.onOpenedSelect);
    eventHub.$off('ngx-flexible-select-button.clicked', this.onButtonClick);

    if (this.optionsMutationObserver) {
      this.optionsMutationObserver.disconnect();
    }
  }

  ngOnInit() {
    this.selectContainerEl = this.elN.querySelector('.ngx-flexible-select__container');
    this.optToBody();
    this.isMob = isMob();
    this.inputEl = this.elN.querySelector('input');
    this.addwidowResizeListener();
    this.addOutClickListener();
    this.addOnBlurInputListener();
    setTimeout(() => {
      this.initOnChangeDetection();
    }, 500);

    this.selectId = 's' + (Date.now() * Math.random()).toString().replace('.', '_');

    this.optionSelectedCallback = event => {
      if (event.selectId === this.selectId) {
        this.close();
        this.selected = event.value;
        const searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input') as HTMLElement;
        this.beforeSetValueFocus = true;
        if (searchInpitEl) {
          searchInpitEl.focus();
        }
        this.beforeSetValueFocus = false;
      }

      if (event.selectId !== this.selectId) {
        this.close();
        this.cd.markForCheck();
      }
    };

    this.onOptionMounted = event => {
      if (event.selectId === this.selectId) {
        this.options.push(event.option);
      }
    };

    this.onOptionDestroyed = event => {
      if (event.selectId === this.selectId) {
        const index = this.options.indexOf(event.option);

        if (index !== -1) {
          this.options.splice(index, 1);
        }
      }
    };

    this.onOpenedSelect = event => {
      if (event.selectId !== this.selectId) {
        this.close();
        this.cd.markForCheck();
      }
    };

    this.onButtonClick = event => {
      if (event.selectId === this.selectId) {
        this.close();
        const searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input');
        this.beforeSetValueFocus = true;
        if (searchInpitEl) {
          searchInpitEl.focus();
        }
        this.beforeSetValueFocus = false;
      }
    };
    this.onScroll = () => {
      if (this.isOpened) {
        this.calculatePositionAnsSize();
      }
    };

    eventHub.$on('ngx-flexible-select-option.selected', this.optionSelectedCallback);
    eventHub.$on('ngx-flexible-select-option.mounted', this.onOptionMounted);
    eventHub.$on('ngx-flexible-select-option.destroyed', this.onOptionDestroyed);
    eventHub.$on('ngx-flexible-select.opened', this.onOpenedSelect);
    eventHub.$on('ngx-flexible-select-button.clicked', this.onButtonClick);

    setTimeout(
      () => (this.selectOptionsEl = this.selectOptionsWrapEl.querySelector('.ngx-flexible-select__options')),
      0
    );
    setTimeout(
      () =>
        (this.selectOptionsoContainerEl = (
          this.selectOptionsWrapEl.querySelector('.ngx-flexible-select__options-container')
        )),
      0
    );
    document.addEventListener('scroll', this.onScroll, true);
  }

  makeLoadMore = (event) => {
    if (
      !this.pending &&
      this.more &&
      this.selectOptionsoContainerEl.scrollTop >
        (this.selectOptionsoContainerEl.scrollHeight - this.selectOptionsoContainerEl.offsetHeight) * 0.66
    ) {
      this.loadMore.emit({});
    }
  }

  onMouseWheal(event) {
    if (
      this.selectOptionsoContainerEl.scrollTop >=
        this.selectOptionsoContainerEl.scrollHeight - this.selectOptionsoContainerEl.offsetHeight &&
      event.deltaY > 0
    ) {
      event.preventDefault();
    }
  }
  onSelectFocus(event) {
    this.isFocusSearh = true;
    if (this.needFocusInpOnTab && !this.beforeSetValueFocus) {
      this.makeOpen();
      this.cd.markForCheck();
    }
  }
  open(event) {
    this.makeOpen();
  }

  openClose(event) {
    this.isOpened = !this.isOpened;
    if (this.isOpened) {
      this.makeOpen();
    } else {
      this.close();
    }
    event.preventDefault();
    event.stopPropagation();
  }

  private addOnBlurInputListener() {
    let el = this.elN.querySelector('.ngx-flexible-select__search-input');
    el.addEventListener(
      'blur',
      event => {
        setTimeout(() => {
          if (
            event.target !== document.activeElement &&
            this.elN.querySelector('.ngx-flexible-select__search-input input') !== document.activeElement &&
            !hasClass(document.activeElement as HTMLElement, 'ngx-flexible-select__fixed-option') &&
            !hasClass(document.activeElement as HTMLElement, 'ngx-flexible-select-option') &&
            !findAncestor(document.activeElement as HTMLElement, '.ngx-flexible-select__fixed-option')
          ) {
            this.close();
            this.cd.markForCheck();
          }
        });
      },
      20
    );

    el = this.elN.querySelector('.ngx-flexible-select__search-input input');

    if (el) {
      el.addEventListener('blur', event => {
        setTimeout(() => {
          if (
            event.target !== document.activeElement &&
            !hasClass(document.activeElement as HTMLElement, 'ngx-flexible-select__fixed-option') &&
            !hasClass(document.activeElement as HTMLElement, 'ngx-flexible-select-option') &&
            !findAncestor(document.activeElement as HTMLElement, '.ngx-flexible-select__fixed-option')
          ) {
            this.close();
            this.cd.markForCheck();
          }
        });
      });
    }
  }

  private addwidowResizeListener() {
    const vm = this;
    this.runOnResize = (evt) => {
      if (!vm.isMob && vm.isOpened) {
        vm.close();
        vm.cd.markForCheck();
      }
    };

    window.addEventListener('resize', this.runOnResize);
  }

  private addOutClickListener() {
    const vm = this;
    this.runOnWindowClick = (evt) => {
      if (vm.isOpened && !findAncestor(evt.target, '.ngx-flexible-select')) {
        vm.close();
        vm.cd.markForCheck();
      }
    };

    window.addEventListener('click', this.runOnWindowClick);
  }

  private calculatePositionAnsSize() {
    if (!this.isOpened) {
      return;
    }

    const optionsHeight =
      (this.selectOptionsEl &&
        this.selectOptionsEl.getBoundingClientRect &&
        this.selectOptionsEl.getBoundingClientRect().height) ||
      0;
    this.optionsHeightBefore = optionsHeight;

    this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
    this.selectOptionsEl.style.position = this.hasAncesroFixed ? 'fixed' : 'absolute';
    const containerOffset = getOffset(this.selectContainerEl);

    if (
      (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) + window.pageYOffset >
      containerOffset.top + this.selectContainerEl.clientHeight + optionsHeight + 18
    ) {
      this.selectOptionsEl.style.top = containerOffset.top + this.selectContainerEl.offsetHeight + 'px';
      this.selectOptionsEl.style.left = containerOffset.left + 'px';
      this.selectOptionsEl.style.width = this.selectContainerEl.offsetWidth + 'px';
      removeClass(this.selectOptionsEl, 'ngx-flexible-select__options_top');
      removeClass(this.elN, 'ngx-flexible-select__options_top');
    } else {
      this.selectOptionsEl.style.top = containerOffset.top - optionsHeight - 20 + 'px';
      this.selectOptionsEl.style.left = containerOffset.left + 'px';
      this.selectOptionsEl.style.width = this.selectContainerEl.offsetWidth + 'px';
      addClass(this.selectOptionsEl, 'ngx-flexible-select__options_top');
      addClass(this.elN, 'ngx-flexible-select__options_top');
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  waraperClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  writeValue(value: any) {
    this.value = value;
  }

  private close() {
    this.isOpened = false;
    this.isFocusSearh = false;
    this.inputEl = this.elN.querySelector('input');
  }

  private keyArrowDown(event) {
    const elements = this.getArrayElementForFocus();
    const currentFocusedIndex = this.getCurentFocuseIndex(elements);
    let next = currentFocusedIndex === undefined ? 0 : currentFocusedIndex + 1;

    if (next >= (elements && elements.length)) {
      next = 0;
    }

    setTimeout(() => elements[next] && elements[next].focus(), 100);

    event.stopPropagation();
    event.preventDefault();
  }

  private getArrayElementForFocus() {
    const elements = [];
    elements.push(...this.elN.querySelectorAll('input'));
    elements.push(...(document.querySelectorAll(`#${this.selectId} .ngx-flexible-select-option`)) as any);
    elements.push(...(document.querySelectorAll(`#${this.selectId} .ngx-flexible-select__fixed-option`)) as any);

    return elements;
  }

  private getCurentFocuseIndex(elements) {
    for (const key in elements) {
      if (elements[key] === document.activeElement) {
        return +key;
      }
    }

    return undefined;
  }

  private initOnChangeDetection() {
    if (!MutationObserver) {
      return;
    }

    this.optionsMutationObserver = new MutationObserver(
      throttle(() => {
        this.calculatePositionAnsSize();
      }, 100)
    );

    const config = { subtree: true, childList: true };
    this.optionsMutationObserver.observe(this.selectOptionsEl, config);
  }

  private keyArrowUp(event) {
    const elements = this.getArrayElementForFocus();
    const currentFocusedIndex = this.getCurentFocuseIndex(elements);
    let prev = currentFocusedIndex === undefined ? -1 : currentFocusedIndex - 1;

    if (prev < 0) {
      if (elements.length) {
        prev = elements.length - 1;
      }
    }

    setTimeout(() => elements[prev] && elements[prev].focus(), 100);

    event.stopPropagation();
    event.preventDefault();
  }

  private makeOpen() {
    this.isOpened = true;
    eventHub.$emit('ngx-flexible-select-option.opened', {
      selectId: this.selectId
    });

    if (!this.selectDisabled) {
      addClass(this.elN.querySelector('.ngx-flexible-select'), 'ngx-flexible-select_opened');
    }

    const inputEl = this.elN.querySelector('input');
    if (inputEl !== document.activeElement) {
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      } else {
        const searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input');
        if (searchInpitEl && searchInpitEl !== document.activeElement) {
          searchInpitEl.focus();
        }
      }
    }

    this.calculatePositionAnsSize();
    this.inputEl = this.elN.querySelector('input');
    eventHub.$emit('ngx-flexible-select.opened', { selectId: this.selectId });
  }

  private optToBody() {
    this.selectOptionsWrapEl = this.elN.querySelector('.ngx-flexible-select__options-wraped');
    document.body.appendChild(this.selectOptionsWrapEl);
  }
}

NgxFlexibleSelectComponent.prototype.makeLoadMore = throttle(NgxFlexibleSelectComponent.prototype.makeLoadMore, 200);

function throttle(callback, limit) {
  let wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
