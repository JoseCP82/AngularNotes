import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServicesService } from './services/language-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNotes'; 

  constructor(private langS:LanguageServicesService, translate:TranslateService) {
    this.langS.add(['es','en']);
    let language=this.langS.get();
    if(language) {
      this.langS.setDefault('es');
      this.langS.use(language);
    }
    else {
      this.langS.setDefault('es');
    }
  }
}