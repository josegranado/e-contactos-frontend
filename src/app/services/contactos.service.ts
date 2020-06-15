import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {
	API_ENDPOINT =  'http://e-contactos.herokuapp.com/api/';
	Contactos:any = null;
  constructor(private httpClient:HttpClient) { }
  getOne(id)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'}); 
    return this.httpClient.get(this.API_ENDPOINT+'contactos/'+id, { headers: headers});
  }
  list()
  {
  	const headers = new HttpHeaders({'Content-Type':'application/json'}); 
    return this.httpClient.get(this.API_ENDPOINT+'contactos/', { headers: headers});
  }
  save(contacto:any)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.post(this.API_ENDPOINT+'contactos/', contacto, { headers: headers});
  }
  editar(contacto:any)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.put(this.API_ENDPOINT+'contactos/'+contacto.id, contacto, { headers: headers});
  }
  borrar(id)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
    return this.httpClient.delete(this.API_ENDPOINT+'contactos/'+id, { headers: headers});
  }
}
