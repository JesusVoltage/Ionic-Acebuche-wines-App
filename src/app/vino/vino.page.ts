import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WinesService } from '../wines.service';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.page.html',
  styleUrls: ['./vino.page.scss'],
})
export class VinoPage implements OnInit {

  vino : any;

  constructor(
    private winesService: WinesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    let id = this.route.snapshot.paramMap.get('id');
    this.winesService.getVinoById(id).subscribe((response) => {
      this.vino = response;
    });

  }
  

}
