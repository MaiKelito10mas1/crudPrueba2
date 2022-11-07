import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/iproducto';
import { IsoloProducto } from '../interfaces/isolo-producto';

@Injectable({
  providedIn: 'root'
})
export class SProductoService {

  constructor(private http: HttpClient) { }

  listarProductos():Observable<IProducto>{
    return this.http.get<IProducto>(`${environment.apiURL}/productos`)
  }

  crearProducto(nuevoProducto: IsoloProducto):Observable<IsoloProducto>{
    return this.http.post<IsoloProducto>(`${environment.apiURL}/productos`, nuevoProducto)
  }

  detallarProducto(id: Number):Observable<IProducto>{
    return this.http.get<IProducto>(`${environment.apiURL}/productos/?id=${id}`)
  }

  actualizarProducto(producto:any):Observable<IProducto>{
    return this.http.put<IProducto>(`${environment.apiURL}/productos/${producto.id}`, producto)
  }

  eliminarProductoId(producto:any):Observable<IProducto>{
    return this.http.delete<IProducto>(`${environment.apiURL}/productos/${producto.id}`)
  }
}
