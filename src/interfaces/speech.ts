export interface Speech {
  ponenciaId?: number,
  titulo: string,
  misionObjetivo: string,
  descripcion : string,
  fecha: Date,
  hora: string,
  aforo: string,
  modalidad: string,
  enlace: string,
  rutaImagen: string,
  estado?: number,
}