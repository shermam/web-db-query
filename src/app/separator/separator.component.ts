import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e);

  }

}
