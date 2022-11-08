import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-head-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <ul class="list-group list-group-horizontal" id="headList" class="row align-items-start">
      <li class="list-group-item" class="col" class=" col-12 col-md-5">{{"TituloMayus" | translate }}</li>
      <li class="list-group-item" class="col" class=" col-12 col-md-5">{{"DescripcionMayus" | translate }}</li>
      <li class="list-group-item" class="col" class=" col-12 col-md-2">{{"Acciones" | translate }}</li>  
    </ul>
  `,
  styleUrls:['./head-list.component.css']
})
export class HeadListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
