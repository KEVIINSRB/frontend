import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientService } from  '../../service/cliente.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ClientService]
})
export class DetailComponent implements OnInit {
	public url: string;
	public cliente: Cliente;
  public confirm: boolean;

  constructor(
  		private _clienteService: ClientService,
  		private _router: Router,
  		private _route: ActivatedRoute
  	) { 
  	  	this.url = Global.url;
        this.confirm = false;
  	}

  ngOnInit() {
  	this._route.params.subscribe(params =>{
  		let id = params.id;

  		this.getCliente(id);
  	});	
  }

  getCliente(id){
  	this._clienteService.getCliente(id).subscribe(
  		response=>{
  			this.cliente = response.cliente;
        console.log(response.cliente);
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteCliente(id){
    this._clienteService.deleteCliente(id).subscribe(
      response =>{
      	if (response.cliente) {
      		this._router.navigate(['/clientes']);
      	}
      },
      error =>{
      	console.log(<any>error);
      }
    );
  }

}
