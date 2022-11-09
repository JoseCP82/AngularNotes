import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageServicesService } from 'src/app/services/language-services.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private langS:LanguageServicesService) { }

  ngOnInit(): void {
  }

  public setLang(language : string){
    this.langS.set(language);
  }
}
