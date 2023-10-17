import { Component, OnInit } from '@angular/core';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';
import { ChatService } from 'src/app/services/app/chat.service';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css']
})
export class ChatNavComponent implements OnInit {

  public groups: IGrupo[] = [];
  public currentGroup: IGrupo | null = null;

  constructor(
    private _chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this._chatService.listGroup().subscribe({
      next: s => {
        this.groups = s;
      }
    });

    this._chatService.getCurrentGroup().subscribe({
      next: s => this.currentGroup = s
    })
  }

  abrirConversa(grupo: IGrupo) {
    this._chatService.setCurrentGroup(grupo);
  }
}
