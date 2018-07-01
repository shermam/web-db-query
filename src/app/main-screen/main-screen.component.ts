import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit, AfterViewInit {

  objectExporer: HTMLElement;
  rightControls: HTMLElement;

  constructor(private elRef: ElementRef) {

  }

  ngAfterViewInit() {
    this.rightControls = this.elRef.nativeElement.querySelector('.right-controls');
    this.objectExporer = this.elRef.nativeElement.querySelector('app-object-explorer');
  }

  ngOnInit() {
  }

  redimension(e) {
    this.objectExporer.style.width = `${e}%`;
    this.rightControls.style.width = `${100 - e}%`;
  }

}
