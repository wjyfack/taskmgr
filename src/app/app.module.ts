import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {  MdSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    AppRoutingModule,
    ProjectModule,
    TaskModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
