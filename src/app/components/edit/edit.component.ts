import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientService } from  '../../service/cliente.service';
import { UploadService } from  '../../service/upload.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ClientService,UploadService]
})
export class EditComponent implements OnInit {

  public title:string;
  public cliente: Cliente;
  public status: string;
  public save_cliente;
  public fileToUpload: Array<File>;
  public url: string;
  constructor(
  	private _clienteService: ClientService,
    private _uploadService: UploadService,
  	private _route: ActivatedRoute,
    private _router: Router
  ) 
  { 
  	this.title= "Editar cliente";
  	this.url= Global.url;
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
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

  onSubmit(){
  	this._clienteService.updateCliente(this.cliente).subscribe(
  		response=>{
  			if (response.cliente) {
          		if (this.fileToUpload) {
          		this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.cliente._id, [], this.fileToUpload, 'image')
                    .then((result:any) => {
                    this.save_cliente = result.cliente; 
                    this.status = 'success';
                });
                }else{
                	this.save_cliente = response.cliente;
                	this.status = 'success'
                }

  			}else{
  				this.status = 'failed'
  			}
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

 	fileChangeEvent(fileInput: any){
      this.fileToUpload = <Array<File>>fileInput.target.files;
    }

}
