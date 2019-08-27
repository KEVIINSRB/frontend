import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientService } from  '../../service/cliente.service';
import { UploadService } from  '../../service/upload.service';
import { Global } from '../../service/global';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `],
  providers:[ClientService, UploadService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public cliente: Cliente;
  public status: string;
  public save_cliente;
  public fileToUpload: Array<File>;
  constructor(
  	private _clienteService: ClientService,
    private _uploadService: UploadService

  ) { 
  	this.title= "crear un nuevo cliente";
  	this.cliente = new Cliente('','','','',0,'','',''); 
  }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  	console.log(form);
  	this._clienteService.saveCliente(this.cliente).subscribe(
  		response =>{
  			if (response.cliente) {
          if (this.fileToUpload) {
              this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.cliente._id, [], this.fileToUpload, 'image')
              .then((result:any) => {
              this.save_cliente = result.cliente; 
              this.status = 'success';
              form.reset();
           });
           }else{
             this.save_cliente = response.cliente; 
              this.status = 'success';
              form.reset();
           }

  			}else{
  				this.status = 'failed'
  			}
  		},
  		error=>{
  			console.log(<any>error)
  		}
  	);

    }

    fileChangeEvent(fileInput: any){
      this.fileToUpload = <Array<File>>fileInput.target.files;
    }
}
