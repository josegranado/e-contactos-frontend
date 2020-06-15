import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddAgendaComponent } from './add-agenda/add-agenda.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AddContactosComponent } from './add-contactos/add-contactos.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditAgendaComponent } from './edit-agenda/edit-agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAgendaComponent,
    ContactosComponent,
    AddContactosComponent,
    EditContactComponent,
    ViewContactComponent,
    EditAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
