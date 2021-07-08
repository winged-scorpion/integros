import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectArr{

  private subject$ = new Subject();


  constructor() {}
  sendMessage(message: any): void {
    this.subject$.next(message);
  }
  getMessage() {
    return this.subject$.asObservable();
  }
}




