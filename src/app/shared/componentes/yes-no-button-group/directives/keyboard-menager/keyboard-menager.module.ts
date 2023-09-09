import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardMenagedItemDirective } from './keyboard-menaged-item.directive';

@NgModule({
  declarations: [KeyboardManagerDirective, KeyboardMenagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, KeyboardMenagedItemDirective],
})
export class KeyboardMenagerModule {}