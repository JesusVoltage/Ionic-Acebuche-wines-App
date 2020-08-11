import { Component, OnInit } from '@angular/core';
import { WinesService } from '../wines.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.page.html',
  styleUrls: ['./lista-categorias.page.scss'],
})
export class ListaCategoriasPage implements OnInit {

  listaVinos : any[];
  categoria : any;

  constructor(
    private winesService: WinesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    let id = this.route.snapshot.paramMap.get('id');
    this.winesService.getVinosByCategoria(id).subscribe((response) => {
      this.listaVinos = response;
    });

    this.winesService.getCategoriaById(id).subscribe((response) =>{
      this.categoria = response;
    });
  }


}
