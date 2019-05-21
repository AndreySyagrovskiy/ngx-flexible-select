(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-flexible-select/fesm5/ngx-flexible-select.js":
/*!***************************************************************!*\
  !*** ./dist/ngx-flexible-select/fesm5/ngx-flexible-select.js ***!
  \***************************************************************/
/*! exports provided: NgxFlexibleSelectService, NgxFlexibleSelectComponent, NgxFlexibleSelectModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFlexibleSelectService", function() { return NgxFlexibleSelectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFlexibleSelectComponent", function() { return NgxFlexibleSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFlexibleSelectModule", function() { return NgxFlexibleSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxFlexibleSelectButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxFlexibleSelectOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFlexibleSelectService = /** @class */ (function () {
    function NgxFlexibleSelectService() {
    }
    NgxFlexibleSelectService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxFlexibleSelectService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxFlexibleSelectService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function NgxFlexibleSelectService_Factory() { return new NgxFlexibleSelectService(); }, token: NgxFlexibleSelectService, providedIn: "root" });
    return NgxFlexibleSelectService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventHub = /** @class */ (function () {
    function EventHub() {
        this.eventsCollection = {};
    }
    /**
     * @param {?} name
     * @param {?} event
     * @return {?}
     */
    EventHub.prototype.$emit = /**
     * @param {?} name
     * @param {?} event
     * @return {?}
     */
    function (name, event) {
        var e_1, _a;
        if (this.eventsCollection[name] && this.eventsCollection[name][0]) {
            var _loop_1 = function (callback) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return callback(event); }), 0);
            };
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventsCollection[name]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var callback = _c.value;
                    _loop_1(callback);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    EventHub.prototype.$on = /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                this.eventsCollection[name] = [];
            }
            if (this.eventsCollection[name].indexOf(this.eventsCollection[name]) === -1) {
                this.eventsCollection[name].push(callback);
            }
            else {
                throw new ArgumentExceptions("Callback can not be used twice");
            }
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    EventHub.prototype.$off = /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                throw new ArgumentExceptions("You don't have callback on " + name + " event " + name);
            }
            /** @type {?} */
            var index = this.eventsCollection[name].indexOf(callback);
            this.eventsCollection[name].splice(index, 1);
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    return EventHub;
}());
/**
 * @param {?} message
 * @return {?}
 */
function ArgumentExceptions(message) {
    this.message = message;
    this.name = 'Argument exception';
}
/** @type {?} */
var eventHub = new EventHub();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function getOffset(obj) {
    /** @type {?} */
    var rect;
    /** @type {?} */
    var win;
    /** @type {?} */
    var elem = obj;
    if (!elem) {
        return;
    }
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    rect = elem.getBoundingClientRect();
    win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
/**
 * @param {?} el
 * @param {?} sel
 * @return {?}
 */
function findAncestor(el, sel) {
    if (typeof el.closest === 'function') {
        return el.closest(sel) || null;
    }
    while (el) {
        if (el.matches(sel)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
/**
 * @param {?} el
 * @return {?}
 */
function hasPositioFixedAncestor(el) {
    while (el) {
        if (window.getComputedStyle(el, null).getPropertyValue('position') === 'fixed') {
            return true;
        }
        el = el.parentElement;
    }
    return false;
}
/**
 * @return {?}
 */
function isMob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @param {?} el
 * @param {?} className
 * @return {?}
 */
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}
/**
 * @param {?} el
 * @param {?} className
 * @return {?}
 */
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className)) {
        el.className += ' ' + className;
    }
}
/**
 * @param {?} el
 * @param {?} className
 * @return {?}
 */
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else if (hasClass(el, className)) {
        /** @type {?} */
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
if (!Element.prototype.matches) {
    Element.prototype.matches =
        ((/** @type {?} */ (Element))).prototype.matchesSelector ||
            ((/** @type {?} */ (Element))).prototype.mozMatchesSelector ||
            ((/** @type {?} */ (Element))).prototype.msMatchesSelector ||
            ((/** @type {?} */ (Element))).prototype.oMatchesSelector ||
            ((/** @type {?} */ (Element))).prototype.webkitMatchesSelector ||
            (/**
             * @param {?} s
             * @return {?}
             */
            function (s) {
                /** @type {?} */
                var matches = (this.document || this.ownerDocument).querySelectorAll(s);
                /** @type {?} */
                var i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFlexibleSelectComponent = /** @class */ (function () {
    function NgxFlexibleSelectComponent(el, cd) {
        var _this = this;
        this.el = el;
        this.cd = cd;
        this.more = false;
        this.needFocusInpOnTab = false;
        this.optionsWrapClass = '';
        this.pending = false;
        this.loadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFocusSearh = false;
        this.isOpened = false;
        this.isNeedHideOption = false;
        this.hasAncesroFixed = false;
        this.options = [];
        this.selectId = '';
        this.selectDisabled = false;
        this.beforeSetValueFocus = true;
        this.optionsHeightBefore = 0;
        this.makeLoadMore = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.pending &&
                _this.more &&
                _this.selectOptionsoContainerEl.scrollTop >
                    (_this.selectOptionsoContainerEl.scrollHeight - _this.selectOptionsoContainerEl.offsetHeight) * 0.66) {
                _this.loadMore.emit({});
            }
        });
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
    }
    Object.defineProperty(NgxFlexibleSelectComponent.prototype, "elN", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxFlexibleSelectComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.value = val;
            this.propagateChange(this.value);
            this.change.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var el = this.elN.querySelector('.ngx-flexible-select__search-input');
        el.focus();
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.blurSearch = /**
     * @return {?}
     */
    function () {
        this.isFocusSearh = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.keyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        switch (event.keyCode) {
            case 40:
                this.keyArrowDown(event);
                break;
            case 38:
                this.keyArrowUp(event);
                break;
            case 27:
                this.close();
                /** @type {?} */
                var searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input');
                if (searchInpitEl) {
                    searchInpitEl.focus();
                }
                break;
            case 13:
                if (!this.isOpened) {
                    this.makeOpen();
                }
                else if (!this.selected) {
                    /** @type {?} */
                    var option = document.querySelector("#" + this.selectId + " .ngx-flexible-select-option");
                    if (option) {
                        option.click();
                    }
                }
                else {
                    this.close();
                }
                event.preventDefault();
                break;
            case 9:
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.close(); }), 100);
                break;
            default: {
                if (this.inputEl && this.inputEl !== document.activeElement) ;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.keyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event.keyCode !== 40 &&
            event.keyCode !== 38 &&
            event.keyCode !== 27 &&
            event.keyCode !== 13 &&
            event.keyCode !== 9 &&
            this.inputEl &&
            this.inputEl !== document.activeElement) {
            this.isOpened = true;
            // addClass(this.elN, 'ngx-flexible-select_opened');
            this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
            eventHub.$emit('ngx-flexible-select-option.opened', {
                selectId: this.selectId
            });
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.inputEl) {
                    _this.inputEl.focus();
                }
            }), 100);
            this.calculatePositionAnsSize();
            event = event || window.event;
            /** @type {?} */
            var charCode = event.which || event.keyCode;
            /** @type {?} */
            var charTyped = String.fromCharCode(charCode);
            if (/[\wА-Яа-яїєЇЄь]/.test(charTyped)) {
                this.inputEl.selected = charTyped;
            }
            else {
                this.inputEl.selected = '';
            }
            /** @type {?} */
            var eventntInput = new Event('input');
            this.inputEl.dispatchEvent(eventntInput);
            eventHub.$emit('ngx-flexible-select.opened', { idSelect: this.selectId });
        }
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectContainerEl = this.elN.querySelector('.ngx-flexible-select__container');
        this.optToBody();
        this.isMob = isMob();
        this.inputEl = this.elN.querySelector('input');
        this.addwidowResizeListener();
        this.addOutClickListener();
        this.addOnBlurInputListener();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.initOnChangeDetection();
        }), 500);
        this.selectId = 's' + (Date.now() * Math.random()).toString().replace('.', '_');
        this.optionSelectedCallback = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.selectId === _this.selectId) {
                _this.close();
                _this.selected = event.value;
                /** @type {?} */
                var searchInpitEl = (/** @type {?} */ (_this.elN.querySelector('.ngx-flexible-select__search-input')));
                _this.beforeSetValueFocus = true;
                if (searchInpitEl) {
                    searchInpitEl.focus();
                }
                _this.beforeSetValueFocus = false;
            }
            if (event.selectId !== _this.selectId) {
                _this.close();
                _this.cd.markForCheck();
            }
        });
        this.onOptionMounted = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.selectId === _this.selectId) {
                _this.options.push(event.option);
            }
        });
        this.onOptionDestroyed = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.selectId === _this.selectId) {
                /** @type {?} */
                var index = _this.options.indexOf(event.option);
                if (index !== -1) {
                    _this.options.splice(index, 1);
                }
            }
        });
        this.onOpenedSelect = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.selectId !== _this.selectId) {
                _this.close();
                _this.cd.markForCheck();
            }
        });
        this.onButtonClick = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.selectId === _this.selectId) {
                _this.close();
                /** @type {?} */
                var searchInpitEl = _this.elN.querySelector('.ngx-flexible-select__search-input');
                _this.beforeSetValueFocus = true;
                if (searchInpitEl) {
                    searchInpitEl.focus();
                }
                _this.beforeSetValueFocus = false;
            }
        });
        this.onScroll = (/**
         * @return {?}
         */
        function () {
            if (_this.isOpened) {
                _this.calculatePositionAnsSize();
            }
        });
        eventHub.$on('ngx-flexible-select-option.selected', this.optionSelectedCallback);
        eventHub.$on('ngx-flexible-select-option.mounted', this.onOptionMounted);
        eventHub.$on('ngx-flexible-select-option.destroyed', this.onOptionDestroyed);
        eventHub.$on('ngx-flexible-select.opened', this.onOpenedSelect);
        eventHub.$on('ngx-flexible-select-button.clicked', this.onButtonClick);
        setTimeout((/**
         * @return {?}
         */
        function () { return (_this.selectOptionsEl = _this.selectOptionsWrapEl.querySelector('.ngx-flexible-select__options')); }), 0);
        setTimeout((/**
         * @return {?}
         */
        function () {
            return (_this.selectOptionsoContainerEl = (_this.selectOptionsWrapEl.querySelector('.ngx-flexible-select__options-container')));
        }), 0);
        document.addEventListener('scroll', this.onScroll, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.onMouseWheal = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectOptionsoContainerEl.scrollTop >=
            this.selectOptionsoContainerEl.scrollHeight - this.selectOptionsoContainerEl.offsetHeight &&
            event.deltaY > 0) {
            event.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.onSelectFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isFocusSearh = true;
        if (this.needFocusInpOnTab && !this.beforeSetValueFocus) {
            this.makeOpen();
            this.cd.markForCheck();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.makeOpen();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.openClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isOpened = !this.isOpened;
        if (this.isOpened) {
            this.makeOpen();
        }
        else {
            this.close();
        }
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.addOnBlurInputListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = this.elN.querySelector('.ngx-flexible-select__search-input');
        el.addEventListener('blur', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (event.target !== document.activeElement &&
                    _this.elN.querySelector('.ngx-flexible-select__search-input input') !== document.activeElement &&
                    !hasClass((/** @type {?} */ (document.activeElement)), 'ngx-flexible-select__fixed-option') &&
                    !hasClass((/** @type {?} */ (document.activeElement)), 'ngx-flexible-select-option') &&
                    !findAncestor((/** @type {?} */ (document.activeElement)), '.ngx-flexible-select__fixed-option')) {
                    _this.close();
                    _this.cd.markForCheck();
                }
            }));
        }), 20);
        el = this.elN.querySelector('.ngx-flexible-select__search-input input');
        if (el) {
            el.addEventListener('blur', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (event.target !== document.activeElement &&
                        !hasClass((/** @type {?} */ (document.activeElement)), 'ngx-flexible-select__fixed-option') &&
                        !hasClass((/** @type {?} */ (document.activeElement)), 'ngx-flexible-select-option') &&
                        !findAncestor((/** @type {?} */ (document.activeElement)), '.ngx-flexible-select__fixed-option')) {
                        _this.close();
                        _this.cd.markForCheck();
                    }
                }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.addwidowResizeListener = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vm = this;
        this.runOnResize = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            if (!vm.isMob && vm.isOpened) {
                vm.close();
                vm.cd.markForCheck();
            }
        });
        window.addEventListener('resize', this.runOnResize);
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.addOutClickListener = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vm = this;
        this.runOnWindowClick = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            if (vm.isOpened && !findAncestor(evt.target, '.ngx-flexible-select')) {
                vm.close();
                vm.cd.markForCheck();
            }
        });
        window.addEventListener('click', this.runOnWindowClick);
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.calculatePositionAnsSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpened) {
            return;
        }
        /** @type {?} */
        var optionsHeight = (this.selectOptionsEl &&
            this.selectOptionsEl.getBoundingClientRect &&
            this.selectOptionsEl.getBoundingClientRect().height) ||
            0;
        this.optionsHeightBefore = optionsHeight;
        this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
        this.selectOptionsEl.style.position = this.hasAncesroFixed ? 'fixed' : 'absolute';
        /** @type {?} */
        var containerOffset = getOffset(this.selectContainerEl);
        if ((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) + window.pageYOffset >
            containerOffset.top + this.selectContainerEl.clientHeight + optionsHeight + 18) {
            this.selectOptionsEl.style.top = containerOffset.top + this.selectContainerEl.offsetHeight + 'px';
            this.selectOptionsEl.style.left = containerOffset.left + 'px';
            this.selectOptionsEl.style.width = this.selectContainerEl.offsetWidth + 'px';
            removeClass(this.selectOptionsEl, 'ngx-flexible-select__options_top');
            removeClass(this.elN, 'ngx-flexible-select__options_top');
        }
        else {
            this.selectOptionsEl.style.top = containerOffset.top - optionsHeight - 20 + 'px';
            this.selectOptionsEl.style.left = containerOffset.left + 'px';
            this.selectOptionsEl.style.width = this.selectContainerEl.offsetWidth + 'px';
            addClass(this.selectOptionsEl, 'ngx-flexible-select__options_top');
            addClass(this.elN, 'ngx-flexible-select__options_top');
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.waraperClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.close = /**
     * @private
     * @return {?}
     */
    function () {
        this.isOpened = false;
        this.isFocusSearh = false;
        this.inputEl = this.elN.querySelector('input');
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.keyArrowDown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var elements = this.getArrayElementForFocus();
        /** @type {?} */
        var currentFocusedIndex = this.getCurentFocuseIndex(elements);
        /** @type {?} */
        var next = currentFocusedIndex === undefined ? 0 : currentFocusedIndex + 1;
        if (next >= (elements && elements.length)) {
            next = 0;
        }
        setTimeout((/**
         * @return {?}
         */
        function () { return elements[next] && elements[next].focus(); }), 100);
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.getArrayElementForFocus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elements = [];
        elements.push.apply(elements, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.elN.querySelectorAll('input')));
        elements.push.apply(elements, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((/** @type {?} */ ((document.querySelectorAll("#" + this.selectId + " .ngx-flexible-select-option"))))));
        elements.push.apply(elements, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((/** @type {?} */ ((document.querySelectorAll("#" + this.selectId + " .ngx-flexible-select__fixed-option"))))));
        return elements;
    };
    /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.getCurentFocuseIndex = /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    function (elements) {
        for (var key in elements) {
            if (elements[key] === document.activeElement) {
                return +key;
            }
        }
        return undefined;
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.initOnChangeDetection = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!MutationObserver) {
            return;
        }
        this.optionsMutationObserver = new MutationObserver(throttle((/**
         * @return {?}
         */
        function () {
            _this.calculatePositionAnsSize();
        }), 100));
        /** @type {?} */
        var config = { subtree: true, childList: true };
        this.optionsMutationObserver.observe(this.selectOptionsEl, config);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.keyArrowUp = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var elements = this.getArrayElementForFocus();
        /** @type {?} */
        var currentFocusedIndex = this.getCurentFocuseIndex(elements);
        /** @type {?} */
        var prev = currentFocusedIndex === undefined ? -1 : currentFocusedIndex - 1;
        if (prev < 0) {
            if (elements.length) {
                prev = elements.length - 1;
            }
        }
        setTimeout((/**
         * @return {?}
         */
        function () { return elements[prev] && elements[prev].focus(); }), 100);
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.makeOpen = /**
     * @private
     * @return {?}
     */
    function () {
        this.isOpened = true;
        eventHub.$emit('ngx-flexible-select-option.opened', {
            selectId: this.selectId
        });
        if (!this.selectDisabled) {
            addClass(this.elN.querySelector('.ngx-flexible-select'), 'ngx-flexible-select_opened');
        }
        /** @type {?} */
        var inputEl = this.elN.querySelector('input');
        if (inputEl !== document.activeElement) {
            if (inputEl) {
                inputEl.focus();
                inputEl.select();
            }
            else {
                /** @type {?} */
                var searchInpitEl = this.elN.querySelector('.ngx-flexible-select__search-input');
                if (searchInpitEl && searchInpitEl !== document.activeElement) {
                    searchInpitEl.focus();
                }
            }
        }
        this.calculatePositionAnsSize();
        this.inputEl = this.elN.querySelector('input');
        eventHub.$emit('ngx-flexible-select.opened', { selectId: this.selectId });
    };
    /**
     * @private
     * @return {?}
     */
    NgxFlexibleSelectComponent.prototype.optToBody = /**
     * @private
     * @return {?}
     */
    function () {
        this.selectOptionsWrapEl = this.elN.querySelector('.ngx-flexible-select__options-wraped');
        document.body.appendChild(this.selectOptionsWrapEl);
    };
    NgxFlexibleSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-flexible-select',
                    template: "<div class=\"ngx-flexible-select ngx-flexible-select_sm\"\n    [ngClass]=\"{ 'ngx-flexible-select_has-value': selected !== null && selected !== undefined ? true : false, \n        'ngx-flexible-select_opened': isOpened && !selectDisabled, \n        'ngx-flexible-select_empty': !options || !options.length,\n        'ngx-flexible-select_focus-searh': isFocusSearh\n        }\"\n    (keydown)=\"keyDown($event)\" \n    (keypress)=\"keyPress($event)\" \n    (click)=\"open($event)\"\n    \n>\n    <div class=\"ngx-flexible-select__container\">\n        <div class=\"ngx-flexible-select__inner-wrapper\">\n            <div class=\"ngx-flexible-select__value\">\n              <ng-content select=\"[value-text]\"></ng-content>\n            </div>\n            <div class=\"ngx-flexible-select__placeholder\">\n              <ng-content select=\"[label]\"></ng-content>\n            </div>\n            <div (click)=\"openClose($event)\" class=\"ngx-flexible-select__icon\"></div>\n        </div>\n\n        <div (focus)=\"onSelectFocus($event)\" (blur)=\"blurSearch()\" [tabindex]=\"isOpened && !selectDisabled ? -1 : 0\" class=\"ngx-flexible-select__search-input\">\n            <ng-content select=\"[search-input]\"></ng-content>\n        </div>\n        <div [id]=\"selectId\" [ngClass]=\"{'ngx-flexible-select_opened': isOpened && !selectDisabled, 'ngx-flexible-select_empty': !options || !options.length}\"\n            class=\"ngx-flexible-select__options-wraped\">\n            <div *ngIf=\"!isNeedHideOption\"\n                class=\"ngx-flexible-select__options ngx-flexible-select-options\"\n                role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                (keydown)=\"keyDown($event)\" \n            >\n                <div (mousewheel)=\"onMouseWheal($event)\"\n                (scroll)=\"makeLoadMore($event)\"\n                    class=\"ngx-flexible-select__options-container\">\n                    <ng-content></ng-content>\n                </div>\n                <ng-content select=\"[button]\"></ng-content>\n            </div>\n        </div>\n    </div>\n</div>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return NgxFlexibleSelectComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [".ngx-flexible-select{position:relative;margin:18px 0;height:52px;padding:2px 0;box-sizing:border-box;vertical-align:middle}.ngx-flexible-select__container{position:relative;height:33px;padding:0 2px 3px 0;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:border-box;cursor:text}.ngx-flexible-select__label{display:none}.ngx-flexible-select__value{display:none;height:33px;font-size:16px;line-height:26px;padding:2px 35px 4px 0;border-bottom:1px solid transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}.ngx-flexible-select__placeholder{position:absolute;top:3px;width:100%;font-size:16px;line-height:24px;color:rgba(0,0,0,.38);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;transition:transform .4s cubic-bezier(.25,.8,.25,1);transition:transform .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);-webkit-transform-origin:left top;transform-origin:left top}.ngx-flexible-select__icon{display:block;position:absolute;top:5px;right:-5px;height:28px;width:24px;text-align:center;margin:0 4px;cursor:pointer;z-index:6}.ngx-flexible-select__icon:after{content:'';display:inline-block;position:absolute;top:10px;right:5px;width:0;height:0;border-style:solid;border-width:5px 5px 0;border-color:rgba(0,0,0,.54) transparent transparent}.ngx-flexible-select__options{width:100%;min-width:136px;min-height:0;visibility:hidden;position:absolute;top:50px;z-index:-10;background-color:#fafafa;box-shadow:0 8px 8px 0 rgba(0,0,0,.24),0 0 8px 0 rgba(0,0,0,.12)}.ngx-flexible-select__options_top{box-shadow:0 0 8px 0 rgba(0,0,0,.24),0 0 8px 0 rgba(0,0,0,.12)}.ngx-flexible-select__options-container{display:block;max-height:200px;overflow-y:auto;overflow-x:hidden;z-index:1}.ngx-flexible-select__options-container::-webkit-scrollbar{width:8px}.ngx-flexible-select__options-container::-webkit-scrollbar-track{background-color:#ddd}.ngx-flexible-select__options-container::-webkit-scrollbar-thumb{background-color:#bdbdbd}.ngx-flexible-select__divider{display:block;border-top:1px solid rgba(0,0,0,.12);margin:0}.ngx-flexible-select__divider:first-child{padding-top:8px}.ngx-flexible-select__divider:last-child{padding-bottom:8px}.ngx-flexible-select md-divider:first-child{padding-top:8px}.ngx-flexible-select md-divider:last-child{padding-bottom:8px}.ngx-flexible-select ngx-flexible-select-option{display:block}ngx-flexible-select-options{display:block;max-height:200px;overflow-y:auto;overflow-x:hidden}ngx-flexible-select-options ngx-flexible-select-option{display:block}ngx-flexible-select-options ngx-flexible-select-option:first-child{padding-top:8px}ngx-flexible-select-options ngx-flexible-select-option:last-child{padding-bottom:8px}.ngx-flexible-select__fixed-option button{min-height:48px;position:relative;display:flex;align-items:center;width:100%;transition:background .15s linear;padding:8px 16px;outline:0;cursor:pointer;border:none;border-top:1px solid rgba(0,0,0,.12);box-sizing:border-box;margin-bottom:8px;background:0 0}.ngx-flexible-select__fixed-option button:hover{background:#eee}.ngx-flexible-select__fixed-option:focus{outline:0}.ngx-flexible-select__fixed-option:focus button{background:#eee}.ngx-flexible-select-option{min-height:48px;position:relative;display:flex;align-items:center;width:auto;transition:background .15s linear;padding:8px 16px;outline:0;cursor:pointer;box-sizing:border-box}.ngx-flexible-select-option:focus,.ngx-flexible-select-option:hover{background:#eee}.ngx-flexible-select-option_error{color:#ec413b}.ngx-flexible-select__search-input{display:block;opacity:0;position:absolute;top:0;z-index:-1;background:0 0;min-height:1px;min-width:1px}.ngx-flexible-select__search-input input{visibility:hidden}.ngx-flexible-select__search-input:focus{outline:0}.ngx-flexible-select_has-value .ngx-flexible-select__value{display:block}.ngx-flexible-select_has-value .ngx-flexible-select__placeholder{width:auto;-webkit-transform:translateY(-22px) translateX(0) scale(.75);transform:translateY(-22px) translateX(0) scale(.75);color:rgba(0,0,0,.54)}.ngx-flexible-select_has-value .ngx-flexible-select__icon:after{opacity:1}.ngx-flexible-select_has-value .ngx-flexible-select__search-input{background:#fff}.ngx-flexible-select__tab-focus .ngx-flexible-select__container{border-bottom:2px solid rgba(0,0,0,.87)}.ngx-flexible-select_focus-searh .ngx-flexible-select__icon:after{border-color:rgba(0,0,0,.87) transparent transparent;opacity:1}.ngx-flexible-select_focus-searh .ngx-flexible-select__container{border-bottom:2px solid rgba(0,0,0,.87)}.ngx-flexible-select_opened .ngx-flexible-select__placeholder{width:auto;-webkit-transform:translateY(-22px) translateX(0) scale(.75);transform:translateY(-22px) translateX(0) scale(.75);color:rgba(0,0,0,.87)}.ngx-flexible-select_opened .ngx-flexible-select__icon:after{border-color:rgba(0,0,0,.87) transparent transparent;opacity:1}.ngx-flexible-select_opened .ngx-flexible-select__container{border-bottom:2px solid rgba(0,0,0,.87)}.ngx-flexible-select_opened .ngx-flexible-select__options{visibility:visible;z-index:200}.ngx-flexible-select_opened .ngx-flexible-select__search-input{display:block;z-index:5;opacity:1;width:100%;padding-right:35px}.ngx-flexible-select_opened .ngx-flexible-select__search-input input{visibility:visible;line-height:22px;background:0 0;border:none;border-bottom:0;outline:0;padding:4px 0 5px;width:100%;font-size:16px;font-weight:400}.ngx-flexible-select_opened .ngx-flexible-select__search-input input::-webkit-input-placeholder{font-weight:400;color:rgba(0,0,0,.54)}.ngx-flexible-select_opened .ngx-flexible-select__search-input input::-moz-placeholder{font-weight:400;color:rgba(0,0,0,.54)}.ngx-flexible-select_opened .ngx-flexible-select__search-input input:-ms-input-placeholder{font-weight:400;color:rgba(0,0,0,.54)}.ngx-flexible-select-root[required] .ngx-flexible-select__placeholder:after{font-size:13px;vertical-align:top}.ng-submitted stf-ng-select.ng-invalid .ngx-flexible-select__container{border-bottom-color:#ec413b}.ng-submitted stf-ng-select.ng-invalid .ngx-flexible-select__placeholder{color:#ec413b}.ng-submitted stf-ng-select.ng-invalid .ngx-flexible-select__icon:after{opacity:1;color:#ec413b;border-color:#ec413b transparent transparent}.ng-submitted stf-ng-select.ng-invalid-required .ngx-flexible-select__container{border-bottom-color:#ec413b}.ng-submitted stf-ng-select.ng-invalid-required .ngx-flexible-select__placeholder{color:#ec413b}.ng-submitted stf-ng-select.ng-invalid-required .ngx-flexible-select__placeholder:after{color:#ec413b;font-size:13px;vertical-align:top}.ng-submitted stf-ng-select.ng-invalid-required .ngx-flexible-select__icon:after{opacity:1;color:#ec413b;border-color:#ec413b transparent transparent}"]
                }] }
    ];
    /** @nocollapse */
    NgxFlexibleSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    NgxFlexibleSelectComponent.propDecorators = {
        more: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        needFocusInpOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        optionsWrapClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loadMore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus', ['$event'],] }]
    };
    return NgxFlexibleSelectComponent;
}());
NgxFlexibleSelectComponent.prototype.makeLoadMore = throttle(NgxFlexibleSelectComponent.prototype.makeLoadMore, 200);
/**
 * @param {?} callback
 * @param {?} limit
 * @return {?}
 */
function throttle(callback, limit) {
    /** @type {?} */
    var wait = false;
    return (/**
     * @return {?}
     */
    function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                wait = false;
            }), limit);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFlexibleSelectOptionComponent = /** @class */ (function () {
    function NgxFlexibleSelectOptionComponent(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectOptionComponent.prototype.keyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case 13:
                this.selectValue(event);
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectOptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        eventHub.$emit('ngx-flexible-select-option.destroyed', {
            option: this,
            selectId: this.selectId,
        });
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = findAncestor(_this.el.nativeElement, '.ngx-flexible-select__options-wraped');
            if (el) {
                _this.selectId = el.getAttribute('id');
            }
            eventHub.$emit('ngx-flexible-select-option.mounted', {
                option: _this,
                selectId: _this.selectId,
            });
        }), 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectOptionComponent.prototype.selectValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        eventHub.$emit('ngx-flexible-select-option.selected', {
            value: this.value,
            selectId: this.selectId,
        });
        this.isSelected = true;
    };
    NgxFlexibleSelectOptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-flexible-select-option',
                    template: "<div tabindex=\"0\"  class=\"ngx-flexible-select-option\"\n    (click)=\"selectValue($event)\"\n    (keydown)=\"keyDown($event)\"\n    >\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NgxFlexibleSelectOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgxFlexibleSelectOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return NgxFlexibleSelectOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFlexibleSelectButtonComponent = /** @class */ (function () {
    function NgxFlexibleSelectButtonComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    NgxFlexibleSelectButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        eventHub.$emit('ngx-flexible-select-option.destroyed', {
            option: this,
            selectId: this.selectId,
        });
    };
    /**
     * @return {?}
     */
    NgxFlexibleSelectButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = findAncestor(_this.el.nativeElement, '.ngx-flexible-select__options-wraped');
            if (el) {
                _this.selectId = el.getAttribute('id');
            }
            eventHub.$emit('ngx-flexible-select-option.mounted', {
                option: _this,
                selectId: _this.selectId,
            });
            _this.el.nativeElement
                .querySelector('button')
                .addEventListener('click', (/**
             * @return {?}
             */
            function () {
                eventHub.$emit('ngx-flexible-select-button.clicked', {
                    selectId: _this.selectId,
                });
            }));
        }), 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFlexibleSelectButtonComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.el.nativeElement
            .querySelector('button')
            .click();
        return true;
    };
    NgxFlexibleSelectButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-flexible-select-button',
                    template: "<div tabindex=\"0\" (keydown.enter)=\"onEnter($event)\" class=\"ngx-flexible-select__fixed-option\">\n   <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NgxFlexibleSelectButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return NgxFlexibleSelectButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFlexibleSelectModule = /** @class */ (function () {
    function NgxFlexibleSelectModule() {
    }
    NgxFlexibleSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [NgxFlexibleSelectComponent, NgxFlexibleSelectOptionComponent, NgxFlexibleSelectButtonComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                    ],
                    exports: [NgxFlexibleSelectComponent, NgxFlexibleSelectOptionComponent, NgxFlexibleSelectButtonComponent]
                },] }
    ];
    return NgxFlexibleSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-flexible-select.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ngx-flexible-select [(ngModel)]=\"title\">\n  <div value-text>{{title}}</div>\n  <div label>Some select</div>\n  <ngx-flexible-select-option value=\"Some1\">Some1</ngx-flexible-select-option>\n  <ngx-flexible-select-option value=\"Some2\">Some2</ngx-flexible-select-option>\n  <ngx-flexible-select-option value=\"Some4\">Some4</ngx-flexible-select-option>\n</ngx-flexible-select>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-flexible-select-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_flexible_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-flexible-select */ "./dist/ngx-flexible-select/fesm5/ngx-flexible-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_flexible_select__WEBPACK_IMPORTED_MODULE_4__["NgxFlexibleSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/asiah/project/ngx-flexible-select/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map