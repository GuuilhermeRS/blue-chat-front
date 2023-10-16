import { Component, Input } from '@angular/core';
import { IUser } from '../../../interfaces/IUser';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
  @Input() user: IUser = {
    name: '',
    profile_pic: '',
    active: false,
  };
}
