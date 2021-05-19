import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Messages: string[] = [];
  add(Messages: string){
    this.Messages.push(Messages);
  }
  clear(){
    this.Messages = [];
  }
}
