import { Component, OnInit } from '@angular/core';
import { WinesService } from '../wines.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: any;

  constructor(private winesService: WinesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.winesService.getCategorias().subscribe((response) => {
      this.categorias = response;
      console.log(response);
    });
  }

}


