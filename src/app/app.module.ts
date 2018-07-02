import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ObjectExplorerComponent } from './object-explorer/object-explorer.component';
import { QueryWindowComponent } from './query-window/query-window.component';
import { ResultsWindowComponent } from './results-window/results-window.component';
import { SeparatorComponent } from './separator/separator.component';
import { CommandBarComponent } from './command-bar/command-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ObjectExplorerComponent,
    QueryWindowComponent,
    ResultsWindowComponent,
    SeparatorComponent,
    CommandBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
