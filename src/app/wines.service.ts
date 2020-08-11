import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { categorias } from '../assets/data/categorias';
import { vinos } from '../assets/data/vinos';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  constructor() { }

  getCategorias(): Observable <any> {
    return of(categorias);
  }

  getCategoriaById(id){
    let categoriaRes : any;
    for (const categoria of categorias) {
      if(categoria.id == id){
        categoriaRes = categoria;
      }
    }
    return of(categoriaRes);
  }


  getVinosByCategoria(id){
    let listaVinos : any[] = [];
    for (const vino of vinos) {
      if(vino.categoria == id){
        listaVinos.push(vino);
      }
    }
    return of(listaVinos);
  }

  getVinoById(id){
    let vinoOk : any;
    for (const vino of vinos) {
      if(vino.id == id){
        vinoOk = vino;
      }
    }
    return of(vinoOk);
  }

}
