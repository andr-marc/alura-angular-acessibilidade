import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardMenagedItemDirective } from "./keyboard-menaged-item.directive";

@Directive({
    selector: '[appKm]'
})
export class KeyboardManagerDirective {
    @ContentChildren(KeyboardMenagedItemDirective) items: QueryList<KeyboardMenagedItemDirective>
    
    @HostListener('keyup', ['$event'])
    menageKeys(event: KeyboardEvent) {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowRight':
            this.moveFocus(ArrowDirection.RIGHT).focus();
            break;
          case 'ArrowDown':
          case 'ArrowLeft':
            this.moveFocus(ArrowDirection.LEFT).focus();
            break;
        }
    }

    moveFocus(direction: ArrowDirection): KeyboardMenagedItemDirective {
        const items = this.items.toArray();
        const currentSelectedIndex = items.findIndex(item => item.isFocused());
        const targetElementFocus = items[currentSelectedIndex + direction];
        if(targetElementFocus) {
            return targetElementFocus;
        }
        return direction === ArrowDirection.LEFT
          ? items[items.length - 1]
          : items[0];
    }
}

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
}