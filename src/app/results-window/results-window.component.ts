import { Component, OnInit } from '@angular/core';
import { QueryService } from "../services/query.service";

@Component({
  selector: 'app-results-window',
  templateUrl: './results-window.component.html',
  styleUrls: ['./results-window.component.css']
})
export class ResultsWindowComponent implements OnInit {

  constructor(public queryService: QueryService) { }

  ngOnInit() {

  }

}
