import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { AgendaService } from '../services/agenda.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
	result:any = null;
  contactos:any = [];
  agenda:any = null;
  cont = 0;
  constructor( 
    private agendaService: AgendaService,
    private contactosService: ContactosService, 
    private activatedRoute: ActivatedRoute ,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.agendaService.getOne(this.activatedRoute.snapshot.params['id']).subscribe(
      data => this.agenda = data[0])
  	this.contactosService.list().subscribe(data =>
    {
        this.result = data;
        console.log(this.result)
        this.result.forEach(
          (el) =>
          {
           
            if( el.agenda_id === this.activatedRoute.snapshot.params['id'])
            {
             
              this.contactos.push(el);
            }
            this.cont++;
          }

          )
    })
  }
  borrar(id)
  {
    location.reload()
    this.contactosService.borrar(id).subscribe(data => console.log(data))
  }
  regresar()
  {
    this.router.navigate([ '/' ]);
  }
}
