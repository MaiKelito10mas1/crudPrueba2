import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsoloProducto } from 'src/app/interfaces/isolo-producto';
import { SProductoService } from 'src/app/service/sproducto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {


  nuevoProducto: IsoloProducto = {
    nombre: "Tussy",
    precio: 10000,
    descripcion: "Un tussaso revive a veces, otras mata. Preparate.",
    imagen: "http"
  }

  constructor( private productoServicios: SProductoService, private router:Router) {

  }

  ngOnInit() {
  }

  crearProducto(){
    this.productoServicios.crearProducto(this.nuevoProducto).subscribe()
    this.router.navigateByUrl("list-producto")
  }

}
