import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from './UI/custom-checkbox/custom-checkbox.component';
import { StrengthDashboardComponent } from './generator/strength-dashboard/strength-dashboard.component';
import { PasswordDashboardComponent } from './generator/password-dashboard/password-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    CustomCheckboxComponent,
    StrengthDashboardComponent,
    PasswordDashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
