import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export interface DragData {
  tag: string; // 标识
  data: any;
}

@Injectable()
export class DragDropService {

 private _dragData = new BehaviorSubject<DragData> (null); // 能记住上一次的值
 setDragData(data: DragData) {
   this._dragData.next(data);
 }
 getDragData(): Observable<DragData> {
   return this._dragData.asObservable();
 }
 clearDragData() {
   this._dragData.next(null);
 }
}
