import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthorizationService{
  constructor(private http: HttpClient) {}
  public getAu(login: string, password: string,api:boolean): Observable<any> {
    if(api){
      return this.http.post('http://a92250ek.beget.tech/assets/server.php', {login,password}, {responseType: 'json'})
    }else{
      return this.http.post('http://a92250ek.beget.tech/assets/server.php', {login}, {responseType: 'json'})
    }
  }
}
