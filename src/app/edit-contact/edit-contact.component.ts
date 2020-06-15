import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
	agenda:any = null;
	contacto:any = {
		nombre:'',
		apellido:'',
		email: '',
		direccion:'',
		numero_telefono:'',
		numero_trabajo:''

	};
	activeRoute:string = null;
	
  constructor(
  	private contactoService: ContactosService,
  	private activatedRoute : ActivatedRoute,
  	private router: Router,
  	private agendaService: AgendaService) { }

  ngOnInit(): void {
  	this.activeRoute = this.activatedRoute.snapshot.params['idcontacto'];
  	this.agendaService.getOne(this.activatedRoute.snapshot.params['id']).subscribe(
  		data => this.agenda = data[0] )
  	this.contactoService.getOne(this.activatedRoute.snapshot.params['idcontacto']).subscribe(
  		data => this.contacto = data[0] )
  }

  editar(id)
  {
  	this.contactoService.editar(this.contacto).subscribe( data => console.log(data))
  	this.router.navigate(['agenda', this.agenda.id]).then(() => { location.reload() });
  }

}
