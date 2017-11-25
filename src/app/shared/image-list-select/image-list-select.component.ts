import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent), // 向前引用
      multi: true // 多个引用: 多对一的
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent), // 向前引用
      multi: true // 多个引用: 多对一的
    },
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input() title = '选择';
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() useSvgIcon = false;
  @Input() itemWidth = '80px';
  selected: string;
 private propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    this.selected = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  constructor() { }


  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.selected);
  }
  validate(c: FormControl): {[key: string]: any} {
    return this.selected ? null : {
      imageListInalid: {
        valid: false
      }
    }
  }
}
