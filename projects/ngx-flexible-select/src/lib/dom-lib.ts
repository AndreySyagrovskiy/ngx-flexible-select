export interface Position {
  left: number;
  top: number;
}

export function getOffset(obj: HTMLElement): Position {
  let rect;
  let  win;
  const elem = obj;

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

export function findAncestor(el: HTMLElement, sel) {
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

export function hasPositioFixedAncestor(el: HTMLElement): boolean {
  while (el) {
    if (
      window.getComputedStyle(el, null).getPropertyValue('position') === 'fixed'
    ) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

export function isMob(): boolean {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export function triggerEvent(el, eventName, options) {
  let event;
  if ((<any>window).CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
}

export function hasClass(el: HTMLElement, className: string): boolean {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

export function addClass(el: HTMLElement, className: string) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += ' ' + className;
  }
}

export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches =
    (<any>Element).prototype.matchesSelector ||
    (<any>Element).prototype.mozMatchesSelector ||
    (<any>Element).prototype.msMatchesSelector ||
    (<any>Element).prototype.oMatchesSelector ||
    (<any>Element).prototype.webkitMatchesSelector ||
    function(s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
