export class Cliente {
	constructor(
		public _id: string,
		public nombre: string,
		public apellido: string, 
		public direccion: string,
		public telefono: number,
		public Email: string,
		public fechaNacimiento: string,
		public image: string
	){}
}