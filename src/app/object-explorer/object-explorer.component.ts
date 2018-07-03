import { Component, OnInit, ElementRef } from '@angular/core';
import { QueryService } from "../services/query.service";

@Component({
  selector: 'app-object-explorer',
  templateUrl: './object-explorer.component.html',
  styleUrls: ['./object-explorer.component.css']
})
export class ObjectExplorerComponent implements OnInit {

  constructor(public queryService: QueryService) { }

  ngOnInit() {

  }

}
