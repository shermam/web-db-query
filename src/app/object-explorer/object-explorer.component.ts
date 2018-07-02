import { Component, OnInit, ElementRef } from '@angular/core';
import { QueryService } from "../services/query.service";
import { Table } from "../types/table";

@Component({
  selector: 'app-object-explorer',
  templateUrl: './object-explorer.component.html',
  styleUrls: ['./object-explorer.component.css']
})
export class ObjectExplorerComponent implements OnInit {

  tables: Table[];

  constructor(public queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getTables()
      .subscribe(tables => this.tables = tables);
  }

}
