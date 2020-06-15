import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-agenda',
  templateUrl: './add-agenda.component.html',
  styleUrls: ['./add-agenda.component.css']
})
export class AddAgendaComponent implements OnInit {
	agenda:any =
	{
		nombre: null
	}
  constructor(private agendaService: AgendaService, private router:Router) { }

  ngOnInit(): void {
  }

  sendAgenda()
  {
  	this.agendaService.save(this.agenda).subscribe( data => console.log(data));
  	this.router.navigate(['/']).then(() => { location.reload() });
  }

}