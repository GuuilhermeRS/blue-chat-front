import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/models/interfaces/IMessage';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  @Input() message: IMessage = {
    group_id: 0,
    content: '',
    received: true,
    receivedAt: new Date(2023, 10, 8, 17, 30, 0)
  }
}
