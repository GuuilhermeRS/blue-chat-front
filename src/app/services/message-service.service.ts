import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../modules/chat/components/history/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  public _messages: BehaviorSubject<Array<Message>> = new BehaviorSubject<Array<Message>>([]);

  constructor() { }


}
