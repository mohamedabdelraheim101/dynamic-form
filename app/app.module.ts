import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormCompComponent } from './components/form-comp/form-comp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondFormComponent } from './components/second-form/second-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    SecondFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
