import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SProductoService } from 'src/app/service/sproducto.service';

@Component({
  selector: 'app-detail-producto',
  templateUrl: './detail-producto.page.html',
  styleUrls: ['./detail-producto.page.scss'],
})
export class DetailProductoPage {

  producto = {
    id: 0,
    nombre: "Marimba",
    precio: 9000,
    descripcion: "ADASDASD",
    imagen: "AAA"

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

}
