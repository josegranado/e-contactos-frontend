import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
	contacto:any = null;
  constructor(
  	private contactosService: ContactosService,
  	private router: Router,
  	private activatedRoute: ActivatedRoute 
  	) { }

  ngOnInit(): void {
  	this.contactosService.getOne(this.activatedRoute.snapshot.params['idcontacto']).subscribe(
  		data => this.contacto = data[0]
  		)
  }
  regresar()
  {
  	this.router.navigate(['agenda', this.activatedRoute.snapshot.params['id']])
  }
}
