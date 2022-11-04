import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNotes';

  private user!: string;

  constructor() {}
}
