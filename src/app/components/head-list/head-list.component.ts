import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-head-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul class="list-group list-group-horizontal" class="row align-items-start">
      <li class="list-group-item" class="col" class=" col-12 col-md-5">TÍTULO</li>
      <li class="list-group-item" class="col" class=" col-12 col-md-5">DESCRIPCIÓN</li>
      <li class="list-group-item" class="col" class=" col-12 col-md-2">ACCIONES</li>  
    </ul>
  `,
  styleUrls:['./head-list.component.css']
})
export class HeadListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
