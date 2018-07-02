import { Component, OnInit } from '@angular/core';
import { QueryService } from "../services/query.service";

@Component({
  selector: 'app-results-window',
  templateUrl: './results-window.component.html',
  styleUrls: ['./results-window.component.css']
})
export class ResultsWindowComponent implements OnInit {

  results: any[];
  headers: string[];

  constructor(public queryService: QueryService) { }

  ngOnInit() {
    this.queryService.query("teste")
      .subscribe(result => {
        if (!result || !result.length) return;
        this.results = result;
        this.headers = Object.keys(result[0]);
      });
  }

}
