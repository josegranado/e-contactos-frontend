import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	agendas:any= null;
  constructor(private agendaService:AgendaService) { }

  ngOnInit(): void {
  	this.agendaService.list().subscribe( data => this.agendas = data );
  }
  borrar(id)
  {
  	location.reload()
  	this.agendaService.borrar(id).subscribe( data => console.log(data))
  }
}
