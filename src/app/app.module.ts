import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolutionSelectorComponent } from './solution-selector/solution-selector.component';
import { EnvironmentSelectorComponent } from './environment-selector/environment-selector.component';
import { FunctionalSelectorComponent } from './functional-selector/functional-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionSelectorComponent,
    EnvironmentSelectorComponent,
    FunctionalSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
