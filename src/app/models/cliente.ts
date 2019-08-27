export class Cliente {
	constructor(
		public _id: string,
		public tipoIdentificacion: string,
		public identificacion: number,
		public primerNombre: string,
		public segundoNombre: string,
		public primerApellido: string, 
		public segundoApellido: string,
		public direccion: string,
		public telefono: number,
		public Email: string,
		public ocupacion: string,
		public fechaNacimiento: string,
		public image: string
	){}
}