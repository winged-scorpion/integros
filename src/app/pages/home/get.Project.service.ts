import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetProjectService{
  constructor(private http: HttpClient) {}
  public getP(localVersion: number): Observable<any> {
    return this.http.post('http://a92250ek.beget.tech/assets/projectApi.php',{localVersion});
  }
}
