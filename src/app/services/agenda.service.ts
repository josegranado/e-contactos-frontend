import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
	API_ENDPOINT =  'http://e-contactos.herokuapp.com/api/';
	Agendas:any = null;
  constructor(private httpClient:HttpClient) { }
  getOne(id)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'}); 
    return this.httpClient.get(this.API_ENDPOINT+'agendas/'+id, { headers: headers});
  }  
  list()
  {
  	const headers = new HttpHeaders({'Content-Type':'application/json'}); 
    return this.httpClient.get(this.API_ENDPOINT+'agendas/', { headers: headers});
  }
  save(agenda:any)
  {
  	const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.post(this.API_ENDPOINT+'agendas/', agenda, { headers: headers});
  }
   editar(agenda:any)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.put(this.API_ENDPOINT+'agendas/'+agenda.id, agenda, { headers: headers});
  }
  borrar(id)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.delete(this.API_ENDPOINT+'agendas/'+id, { headers: headers});
  }
}
