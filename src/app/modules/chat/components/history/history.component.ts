import { Component, OnInit } from '@angular/core';
import { BlueChatServerService } from 'src/app/services/blue-chat-server.service';
import { Message } from './Message';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  messageList: Array<Message> = []
  id: string = '43c7929c-29e2-4e9a-9d74-bba45e63fdc8';

  constructor(
    private _wsService: BlueChatServerService,
    private _messageService: MessageServiceService,
  ) { }

  ngOnInit(): void {
    this._messageService._messages
      .subscribe(s => {

        this.messageList = s[this.id];
        console.log(this.messageList)
      });
  }
}

