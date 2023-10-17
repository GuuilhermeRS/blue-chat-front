import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';
import { ChatService } from 'src/app/services/app/chat.service';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  group: IGrupo | null = null;

  constructor(
    private _chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this._chatService.getCurrentGroup().subscribe({
      next: s => this.group = s
    })
  }
}
