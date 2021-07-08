import { OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()

export class ItemUser implements OnInit{


  private subject = new Subject<any>();
  public nameTest: string;


  sendMessage(message: any): void {
    this.subject.next({name: message});
    this.nameTest = message;
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  ngOnInit(){

  }
}




