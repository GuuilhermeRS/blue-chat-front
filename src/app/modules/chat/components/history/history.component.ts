import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ActivatedRoute } from '@angular/router';
// import { IMessage } from '../../interfaces/IMessage';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';
import { IMessage } from 'src/app/models/interfaces/IMessage';
import { ChatService } from 'src/app/services/app/chat.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public currentGroup: IGrupo | null = null;
  public messages: IMessage[] = [];

  constructor(
    // private _wsService: BlueChatServerService,
    private _messageService: MessageServiceService,
    private route: ActivatedRoute, // Injete o ActivatedRoute
    private _chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this._chatService.getCurrentGroup().subscribe({
      next: s => {
        this.currentGroup = s;
        this._chatService.getMessages(this.currentGroup?.id).subscribe({
          next: s => this.messages = s
        });
      }
    });



    // this.route.queryParams.subscribe(params => {
    //   // this.id = params['Sala'];
    // });

    // this._messageService._messages.subscribe(s => {
    //     // s[this.id].forEach(i => this.messageList.push(i));
    //     // this.messageList = s[this.id];
    //   });
  }
}

