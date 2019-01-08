import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestIfCssComponent } from './test-if-css/test-if-css.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestIfCssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
