import {Injectable} from '@angular/core';



@Injectable()
export class SafeLocalUser {

  isLoggedIn = false; // false проверка проходит в обычном режиме true проверка отменена
  redirectUrl: string;

  // данный конструктор
  login(message: any,time) {
    if(time){
      localStorage.setItem('login', 'true');
      localStorage.setItem('userName', message);
    }else{
      sessionStorage.setItem('login', 'true');
      localStorage.setItem('userName', message);
    }
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('login');
    localStorage.removeItem('userName');

  }

}
