import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageServicesService {

  constructor(private translate:TranslateService, private localS:LocalstorageService) { }

  public set(language:string){
    try {
      this.translate.use(language);
      this.localS.set('language',language);  
    } catch (error) {
      console.log(error);
    }
  }

  public get():string|null {
    try {
      return this.localS.get('language');  
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public add(languages :string[] ){
    this.translate.addLangs(languages);
  }

  public use(language:string) {
    this.translate.use(language);
  }

  public setDefault(language:string) {
    this.translate.setDefaultLang(language);
  }
}
