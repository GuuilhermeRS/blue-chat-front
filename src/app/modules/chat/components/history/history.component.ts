import { Component, OnInit } from '@angular/core';
import { BlueChatServerService } from 'src/app/services/blue-chat-server.service';
import { Message } from './Message';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ActivatedRoute } from '@angular/router';
import { IMessage } from '../../interfaces/IMessage';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  messages: IMessage[] = [
    {
      content: 'Boa tarde',
      received: true,
      receivedAt: new Date(2023, 10, 9, 17, 0, 0)
    },
    {
      content: 'Tudo bem?',
      received: true,
      receivedAt: new Date(2023, 10, 9, 17, 1, 0)
    },
    {
      content: 'Boa tarde',
      received: false,
      receivedAt: new Date(2023, 10, 9, 17, 1, 0)
    }
  ]

  constructor(
    // private _wsService: BlueChatServerService,
    private _messageService: MessageServiceService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // this.id = params['Sala'];
    });

    this._messageService._messages.subscribe(s => {
        // s[this.id].forEach(i => this.messageList.push(i));
        // this.messageList = s[this.id];
      });
  }
}

