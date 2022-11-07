//Por que se crean 2 interfaces? Una es para solo para agregar,
//ya que la id es incremental y se genera solo y las demas para las demas funciones.
// El problema es diferenciarlas XD


export interface IProducto {
  id: number,
  nombre: string,
  precio: number,
  descripcion: string,
  imagen: string,
}
