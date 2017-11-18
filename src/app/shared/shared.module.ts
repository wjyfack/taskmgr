import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdRadioModule,
} from '@angular/material';
/*
* 这个模块主要是 把各模块需要的东西导入进来，再导出去
*/

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
  ],
  exports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdRadioModule,
  ],
  declarations: []
})
export class SharedModule { }