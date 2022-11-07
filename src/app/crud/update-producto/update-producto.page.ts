import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SProductoService } from 'src/app/service/sproducto.service';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.page.html',
  styleUrls: ['./update-producto.page.scss'],
})
export class UpdateProductoPage {

  producto = {
    id: 0,
    nombre: "",
    precio: 0,
    descripcion: "",
    imagen: ""
  }

  constructor(private productoServicios: SProductoService, private router:Router) { }

  ionViewWillEnter(){
    this.traerProductoId(this.traerIdUrl())
  }

  traerIdUrl(){
    let url = this.router.url
    let array = url.split("/", 3)
    let id = parseInt(array[2])
    return id
  }

  traerProductoId(prodId: Number){
    this.productoServicios.detallarProducto(prodId).subscribe(
      (resp:any) => {
        this.producto = {
          id:resp[0].id,
          nombre: resp[0].nombre,
          precio: resp[0].precio,
          descripcion: resp[0].descripcion,
          imagen: resp[0].imagen
        }
      }
    )
  }

  actualizarProducto(){
    this.productoServicios.actualizarProducto(this.producto).subscribe()
    this.router.navigateByUrl("/list-producto")
  }

}
