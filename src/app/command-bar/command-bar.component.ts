import { Component, OnInit } from '@angular/core';
import { QueryService } from "../services/query.service";

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent implements OnInit {

  constructor(private queryService: QueryService) { }

  ngOnInit() {
  }

  excecuteQuery() {
    this.queryService.excecuteQuery();
  }

}
