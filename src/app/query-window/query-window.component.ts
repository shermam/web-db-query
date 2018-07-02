import { Component, OnInit } from '@angular/core';
import { QueryService } from "../services/query.service";

@Component({
  selector: 'app-query-window',
  templateUrl: './query-window.component.html',
  styleUrls: ['./query-window.component.css']
})
export class QueryWindowComponent implements OnInit {

  constructor(public queryService: QueryService) { }

  ngOnInit() {
  }

  keydown(e) {
    if (e.key === "F5") {
      e.preventDefault();
      this.queryService.excecuteQuery();
    }

  }

}
