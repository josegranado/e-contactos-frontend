import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-agenda',
  templateUrl: './edit-agenda.component.html',
  styleUrls: ['./edit-agenda.component.css']
})
export class EditAgendaComponent implements OnInit {
	agenda: any = {
		nombre: ''
	};
  constructor(
  		private agendaService:AgendaService,
  		private router: Router,
  		private activatedRoute: ActivatedRoute
  	) { }

  ngOnInit(): void {
  	this.agendaService.getOne(this.activatedRoute.snapshot.params['id']).subscribe(
  			data => this.agenda = data[0]
  		)
  }
  editar()
  {
  	this.agendaService.editar(this.agenda).subscribe(
  			data => console.log(data)
  		);
  	this.router.navigate(['/'])
  }
}
