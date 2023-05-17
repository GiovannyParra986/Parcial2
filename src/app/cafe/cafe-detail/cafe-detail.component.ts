import { Component, Input, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { CafeDetail } from '../cafe-detail';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  cafeId!: string;
  @Input() cafeDetail!: CafeDetail;

  constructor(
    private cafeService: CafeService
  ) {}

  getCafe(){
    this.cafeService.getCafe(this.cafeId).subscribe(cafe => this.cafeDetail = cafe)
  }

  ngOnInit() {
    if(this.cafeDetail === undefined){
      if (this.cafeId) {
        this.getCafe();
      }
    }
  }

}
