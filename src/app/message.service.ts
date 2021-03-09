import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string;

  updateMessage(message: string){
    this.message = message;
  }

  constructor() { }
}
