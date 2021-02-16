import { EnvoiService } from './services/envoi.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
   
    EnvoiComponent,
   
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [

    EnvoiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
