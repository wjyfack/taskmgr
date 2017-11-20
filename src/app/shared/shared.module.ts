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
  MdSelectModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
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
    MdSelectModule,
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
    MdSelectModule,
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
