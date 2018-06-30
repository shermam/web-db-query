import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ObjectExplorerComponent } from './object-explorer/object-explorer.component';
import { QueryWindowComponent } from './query-window/query-window.component';
import { ResultsWindowComponent } from './results-window/results-window.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ObjectExplorerComponent,
    QueryWindowComponent,
    ResultsWindowComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
