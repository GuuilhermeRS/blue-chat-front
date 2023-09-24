import { Component, OnInit } from '@angular/core';
import { BlueChatServerService } from 'src/app/services/blue-chat-server.service';
import { Message } from './Message';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  messageList: Message[] = [
    { conteudo: 'Ola', data: '2023-09-24 12:00:00', recebida: false },
    { conteudo: 'asdf', data: '2023-09-24 12:00:00', recebida: true },
    { conteudo: 'asdf', data: '2023-09-24 12:00:00', recebida: false },
    { conteudo: 'asdf', data: '2023-09-24 12:00:00', recebida: true },
    { conteudo: 'asdf', data: '2023-09-24 12:00:00', recebida: true },

  ]

  constructor(
    private _wsService: BlueChatServerService,
  ) { }

  ngOnInit(): void {
    console.log(this._wsService.receivedMessage);
  }
}

