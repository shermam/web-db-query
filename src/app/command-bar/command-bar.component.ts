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

  about() {
    alert(`
      Developed by: Shermam Miranda
      https://github.com/shermam/web-db-query
    `)
  }

  excecuteQuery() {
    this.queryService.excecuteQuery();
  }

  refreshTables() {
    this.queryService.refreshTables();
  }

  setConnectionString() {
    const connectionString = prompt(
      "Digite a string de conexão",
      this.queryService.connectionString || ""
    );

    if (connectionString) {
      this.queryService.setConnectionString(connectionString);
      this.queryService.refreshTables();
    }
  }

}
