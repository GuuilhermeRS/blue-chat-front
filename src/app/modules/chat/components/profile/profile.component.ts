import { Component, Input, OnInit } from '@angular/core';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';
import { ChatService } from 'src/app/services/app/chat.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public group: IGrupo | null = null;

  constructor(
    private _chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this._chatService.getCurrentGroup().subscribe({
      next: s => this.group = s
    });
  }
}
