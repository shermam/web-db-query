import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  isMoving: boolean = false;
  parent: HTMLElement;

  @Output()
  redimension: EventEmitter<number> = new EventEmitter();

  constructor(elRef: ElementRef) {
    this.onDown = this.onDown.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onUp = this.onUp.bind(this);

    this.parent = elRef.nativeElement.parentElement;
  }

  ngOnInit() {
    this.parent.addEventListener('mousemove', this.onMove);
    this.parent.addEventListener('mouseup', this.onUp);
  }

  @HostListener('mousedown')
  onDown() {
    this.isMoving = true;
  }


  onUp() {
    this.isMoving = false;
  }

  onMove(e) {
    if (this.isMoving) {
      const positions = this.getParentMousePosition(e);
      const parentWidth = this.parent.offsetWidth;
      const x = positions.x;
      const locationPercent = (x / parentWidth) * 100;
      this.redimension.emit(locationPercent);
    }
  }

  getParentMousePosition(e) {
    return {
      x: e.pageX - this.parent.offsetLeft,
      y: e.pageY - this.parent.offsetTop
    };
  }

}
