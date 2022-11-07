import { Injectable} from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
    providedIn: 'root'
  })
export class ThemesService {

  constructor(private localS:LocalstorageService) {}

    public onSetTheme(e: string) {
      if(e==='dark-theme'){
        document.body.classList.add('dark-theme');
        this.localS.set("theme","dark-theme");
      }else{
        document.body.classList.remove('dark-theme');
        this.localS.set("theme","light-theme");
      }
    }
}