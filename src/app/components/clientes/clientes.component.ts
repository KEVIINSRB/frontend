import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientService } from  '../../service/cliente.service';
import { Global } from '../../service/global';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers:[ClientService]
})
export class ClientesComponent implements OnInit {
	public clientes: Cliente[];
	public url: string;
  constructor(
  		private _clienteService: ClientService
  	){
  		this.url = Global.url;
  	 }

  ngOnInit() {
  	this.getCLientes();
  }

  getCLientes(){
  	this._clienteService.getClientes().subscribe(
  		response =>{
  			if (response.clientes) {
  				this.clientes = response.clientes;
  			}
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

}
