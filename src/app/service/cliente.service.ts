import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../models/cliente';
import { Global } from './global';


@Injectable()
export class ClientService{
	public url:string;


	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'probando el servicio';
	}

	saveCliente(client: Cliente): Observable<any>{
		let params = JSON.stringify(client);
		let headers = new HttpHeaders().set('Content-Type','application/json');


		return this._http.post(this.url+'guardar-cliente', params, {headers:headers});
	}


	getClientes(): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'clientes', {headers:headers});
	}

	getCliente(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'cliente/'+id, {headers:headers});
	}

	deleteCliente(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'cliente/'+id, {headers:headers});
	}

	updateCliente(cliente): Observable<any>{
		let params = JSON.stringify(cliente);
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'cliente/'+cliente._id, params, {headers:headers});
	}
}
