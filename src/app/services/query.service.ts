import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Structure } from "../types/structure";
import { Table } from "../types/table";
import { Http } from "@angular/http";

const response = [{ "IDC_ASPECTO_VISUAL": 1, "DSC_ASPECTO_VISUAL": "Límpido e sem impurezas", "STU_ASPECTO_VISUAL": "S", "DTH_CRIACAO_REG": "\/Date(1479344084897)\/" }, { "IDC_ASPECTO_VISUAL": 2, "DSC_ASPECTO_VISUAL": "Líquido viscoso e Límpido", "STU_ASPECTO_VISUAL": "S", "DTH_CRIACAO_REG": "\/Date(1479344084900)\/" }];

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: Http) {

  }

  query(queryText: string): Observable<any[]> {
    return of(response);
  }

  getTables(): Observable<Table[]> {
    return this.http.get("assets/tabelas.json")
      .pipe(
        map(response => this.structureToTable(response.json()))
      );
  }

  structureToTable(structures: Structure[]): Table[] {
    const tables = [];
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
