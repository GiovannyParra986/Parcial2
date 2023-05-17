import { Component, OnInit } from '@angular/core';
import { CafeDetail } from '../cafe-detail';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<CafeDetail> = [];
  selected: Boolean = false;
  selectedCafe!: CafeDetail;
  p: number = 1;
  searchedCafe: any;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe({next: cafes => this.cafes = cafes , error: e => console.error(e)});
  }

  onSelected(cafe: CafeDetail): void {
    this.selected = true;
    this.selectedCafe = cafe;
  }
  ngOnInit() {
    this.getCafes();
  }

}
