import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoService } from './service/contato.service';
import { ListComponent } from './views/list/list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ContatoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
