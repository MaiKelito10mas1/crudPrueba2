import { Component} from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SProductoService } from 'src/app/service/sproducto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.page.html',
  styleUrls: ['./list-producto.page.scss'],
})
export class ListProductoPage {

  producto = [];

  constructor(private productoService: SProductoService, private cargadorControl: LoadingController) { }

  ionViewWillEnter(){
    this.cargarProductos()
  }

  async cargarProductos(event?: InfiniteScrollCustomEvent){
    const cargando = await this.cargadorControl.create({
      message: "Cargando...",
      spinner: "bubbles"
     }
    );
    await cargando.present();

    this.productoService.listarProductos().subscribe(
      (resp) => {
        cargando.dismiss();
        let listString = JSON.stringify(resp)
        this.producto = JSON.parse(listString)
        event?.target.complete();
      },
      (error) => {
        console.log(error.message)
        cargando.dismiss();
      }
    )
  };

}
