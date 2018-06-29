import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-object-explorer',
  templateUrl: './object-explorer.component.html',
  styleUrls: ['./object-explorer.component.css']
})
export class ObjectExplorerComponent implements OnInit {

  // constructor(private hostElement: ElementRef) {
  //   this.hostElement.nativeElement.addEventListener("mousemove", e => {
  //     this.hostElement.nativeElement.style.width = `${e.offsetX + 30}px`;
  //   });
  // }

  constructor() { }

  ngOnInit() {

  }

}
