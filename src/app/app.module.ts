import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildCmpComponent } from './child-cmp/child-cmp.component';
import {SecondChild} from './second-child-cmp/second-child-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCmpComponent,
    SecondChild
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
