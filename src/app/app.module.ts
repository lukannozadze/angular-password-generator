import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from './UI/custom-checkbox/custom-checkbox.component';
import { StrengthDashboardComponent } from './generator/strength-dashboard/strength-dashboard.component';
import { PasswordDashboardComponent } from './generator/password-dashboard/password-dashboard.component';
import { CopyIconComponent } from './UI/copy-icon/copy-icon.component';
import { RightArrowIconComponent } from './UI/right-arrow-icon/right-arrow-icon.component';
import { CheckboxIconComponent } from './UI/checkbox-icon/checkbox-icon.component';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    CustomCheckboxComponent,
    StrengthDashboardComponent,
    PasswordDashboardComponent,
    CopyIconComponent,
    RightArrowIconComponent,
    CheckboxIconComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
