import { Component, OnInit } from '@angular/core';
import { BlueChatServerService } from 'src/app/services/blue-chat-server.service';
import { Message } from './Message';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  messageList: Array<Message> = []
  id: string = '';

  constructor(
    private _wsService: BlueChatServerService,
    private _messageService: MessageServiceService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['Sala'];
      console.log('Sala:', this.id);
    });

    this._messageService._messages
      .subscribe(s => {

        console.log('Sala: ', this.id);
        this.messageList = s[this.id];
        console.log(this.messageList)
      });
  }
}

