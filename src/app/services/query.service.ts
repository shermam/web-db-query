import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Structure } from "../types/structure";
import { Table } from "../types/table";
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  tables: Table[];
  results: any[];
  headers: string[];
  queryText: string;
  serverURL: string = "http://localhost:61467/server/ashx/_query.ashx";
  queryStructure: string = "select table_name, column_name from information_schema.columns order by table_name;";
  connectionString: string = localStorage.getItem("connectionString");

  constructor(private http: Http) {
    this.refreshTables();
  }

  refreshTables() {
    this.getTables()
      .subscribe(tables => this.tables = tables);
  }

  setConnectionString(connectionString: string) {
    this.connectionString = connectionString;
    localStorage.setItem("connectionString", this.connectionString);
  }

  query(queryText: string): Observable<any[]> {

    if (!this.connectionString) {
      return of(null);
    }

    return this.http.post(this.serverURL, {
      Query: queryText,
      ConnectionString: this.connectionString
    }).pipe(
      map(response => response.json())
    )
  }

  excecuteQuery() {
    this.query(this.queryText)
      .subscribe(result => {
        if (!result || !result.length) return;
        this.results = result;
        this.headers = Object.keys(result[0]);
      });
  }


  getTables(): Observable<Table[]> {
    //return this.http.get("assets/tabelas.json")
    return this.query(this.queryStructure)
      .pipe(
        map(response => this.structureToTable(response))
      );
  }

  structureToTable(structures: Structure[]): Table[] {
    const tables = [];

    if (!structures || !structures.length) {
      return tables;
    }

    let currentTable = new Table;

    for (const structure of structures) {
      if (currentTable.name != null && currentTable.name !== structure.table_name) {
        tables.push(currentTable);
        currentTable = new Table;
      }

      currentTable.name = structure.table_name;
      currentTable.columns.push(structure.column_name);
    }

    tables.push(currentTable);

    return tables;
  }
}
