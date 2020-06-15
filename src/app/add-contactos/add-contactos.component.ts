import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-contactos',
  templateUrl: './add-contactos.component.html',
  styleUrls: ['./add-contactos.component.css']
})
export class AddContactosComponent implements OnInit {
	agenda:any = null;
	contacto:any = {
		nombre:'',
		apellido:'',
		email: '',
		direccion:'',
		numero_telefono:'',
		numero_trabajo:'',
		grupo_id: 1,
		agenda_id: ''
	};
  constructor(
		private contactosService:ContactosService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
  	) { }

  ngOnInit(): void {
  }
  save()
  {
  		this.contacto.agenda_id = this.activatedRoute.snapshot.params['id'];
  		this.contactosService.save(this.contacto).subscribe(data => console.log(data))
  		this.router.navigate(['agenda', this.activatedRoute.snapshot.params['id']]).then(() => { location.reload() });
  }
}
