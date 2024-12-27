export interface Workshop {
  tallerId?: number,
  titulo: string,
  descripcion: string,
  fecha: Date,
  hora: string,
  aforo: string
  modalidad: string,
  enlace: string,
  rutaImagen: string,
  expositorNombre: string,
  expositorRol: string,
  expositorRutaImagen: string,
  estado?: number,
}