import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ThemesService } from 'src/app/services/themes.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public loginS:LoginService, public localS:LocalstorageService, private themesS:ThemesService) {}

  ngOnInit(): void {
  }

  public onSetTheme(e: string) {
    this.themesS.onSetTheme(e);
  }

  public logout(){
    this.localS.remove("user");
    this.loginS.signOut();
  }

}
