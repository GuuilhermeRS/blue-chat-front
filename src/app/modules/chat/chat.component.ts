import { Component } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  user: IUser = {
    name: 'Usuário A',
    profile_pic: 'https://cdn-icons-png.flaticon.com/512/21/21104.png'
  };
}
