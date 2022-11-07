import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { LoginService } from '../services/login.service';
import { ThemesService } from '../services/themes.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router,private loginS:LoginService,private localS: LocalstorageService,
              private themsS:ThemesService){}
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //emulating a loggin system -> fake data
      let login = false; //this.loginS.isAuth();
      let user:SocialUser = JSON.parse(this.localS.get('user')); 
      if(user!=null){
        this.loginS.user = user;
        login=true;
        let theme = JSON.parse(this.localS.get('theme'));
        if(theme!=null){
          this.themsS.onSetTheme(theme);
        }
      }

      let result=false;
      if(!login){
        //Not Logged
        if(route.url[0].toString()!='login'){
          //you're not logged?, ---> not alowed --> go login
          this.loginS.originalPath=route.url[0].toString();
          this.router.navigate(['/login']);
        }else{
          result=true;
        }
      }else{
        //Logged
        if(route.url[0].toString()=='login'){
          //again in login?, ---> not alowed
          this.router.navigate(['']);
        }else{
          result=true;
        }
      }
      return result;
  }
}
