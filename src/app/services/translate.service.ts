import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  static translationMap;

  constructor(private http: Http) {
    this.translate = this.translate.bind(this);
    this.translateCode = this.translateCode.bind(this);
    this.translateName = this.translateName.bind(this);
    this.translateArray = this.translateArray.bind(this);
    this.translateKey = this.translateKey.bind(this);
    this.translateValue = this.translateValue.bind(this);

    http.get("assets/pdm.json")
      .subscribe(r => TranslateService.translationMap = r.json());
  }

  translate(from, to) {
    return (input: string): string => {
      for (const tableCode in TranslateService.translationMap) {
        const table = TranslateService.translationMap[tableCode];
        input = input.replace(new RegExp(table[from], "g"), table[to]);

        for (const column of table.columns) {
          input = input.replace(new RegExp(column[from], "g"), column[to]);
        }
      }

      return input;
    }
  }

  translateName(input: string) {
    return this.translate("name", "code")(input);
  }

  translateCode(input: string) {
    return this.translate("code", "name")(input);
  }


  translateArray(type: string, input: any[]): any[] {
    // console.log(TranslateService.translationMap);
    const returnArray = [];

    for (const line of input) {
      const translatedLine = {};
      for (const key in line) {
        let newKey = key;
        let newValue = line[key];

        if (type === "key") {
          newKey = this.translateCode(newKey);
        } else if (type === "value") {
          newValue = this.translateCode(newValue) + ` (${newValue})`;
        }

        translatedLine[newKey] = newValue;
      }
      returnArray.push(translatedLine);
    }

    return returnArray;
  }

  translateKey(input: any[]): any[] {
    return this.translateArray("key", input);
  }

  translateValue(input: any[]): any[] {
    return this.translateArray("value", input);
  }
}
