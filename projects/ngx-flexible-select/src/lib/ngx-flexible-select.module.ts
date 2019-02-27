import { NgModule } from '@angular/core';
import { NgxFlexibleSelectComponent } from './ngx-flexible-select.component';
import { NgxFlexibleSelectOptionComponent } from './ngx-flexible-select-option.component';
import { NgxFlexibleSelectButtonComponent } from './ngx-flexible-select-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxFlexibleSelectComponent, NgxFlexibleSelectOptionComponent, NgxFlexibleSelectButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgxFlexibleSelectComponent, NgxFlexibleSelectOptionComponent, NgxFlexibleSelectButtonComponent]
})
export class NgxFlexibleSelectModule { }
