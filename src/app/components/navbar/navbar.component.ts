import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginS:LoginService, public localS:LocalstorageService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.localS.remove("user");
    this.loginS.signOut();
  }

}
