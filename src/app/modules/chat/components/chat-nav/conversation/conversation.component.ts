import { Component, Input } from '@angular/core';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
  @Input() group: IGrupo = {
    id: 0,
    guid: '',
    name: '',
    profile_pic: '',
    active: false,
    active_in: new Date(0, 0, 0),
  }
}
