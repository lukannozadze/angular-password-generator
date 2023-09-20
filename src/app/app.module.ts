import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from './UI/custom-checkbox/custom-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    CustomCheckboxComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }