import { Component } from '@angular/core';
import { IUser, IUserItemList } from '../../interfaces/IUser';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css']
})
export class ChatNavComponent {
  public users: IUserItemList[] = [
    {
      name: 'Usuário A',
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
      active: false,
      open_chat: true,
    },
    {
      name: 'Usuário B',
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
      active: true,
      open_chat: false,
    },
    {
      name: 'Usuário C',
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
      active: true,
      open_chat: false,
    }
  ]

  abrirConversa(user: IUserItemList) {
    this.users.forEach(i => i.open_chat = i == user);
  }
}
