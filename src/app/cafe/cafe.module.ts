import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  exports:[],
  declarations: [CafeListComponent]
})
export class CafeModule { }
