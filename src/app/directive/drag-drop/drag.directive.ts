import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  private _isDraggble = false;
  @Input('app-draggable')
  set isDraggble(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggble() {
    return this._isDraggble;
  }
  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
    ) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    console.log(this.dragTag);
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    console.log('dragend')
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}

