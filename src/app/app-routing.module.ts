import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAgendaComponent } from './add-agenda/add-agenda.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EditContactComponent } from './edit-contact/edit-contact.component'
import { AddContactosComponent } from './add-contactos/add-contactos.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditAgendaComponent } from './edit-agenda/edit-agenda.component';
const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'agenda/add', component: AddAgendaComponent },
	{path: 'agenda/:id', component: ContactosComponent},
	{path: 'agenda/:id/edit', component: EditAgendaComponent},
	{path: 'agenda/:id/contactos/add', component: AddContactosComponent},
	{path: 'agenda/:id/contactos/:idcontacto/view', component: ViewContactComponent },
	{path: 'agenda/:id/contactos/:idcontacto/edit', component: EditContactComponent},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
