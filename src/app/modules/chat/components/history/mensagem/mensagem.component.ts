import { Component, Input } from '@angular/core';
import { Message } from '../Message';
import { IMessage } from '../../../interfaces/IMessage';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  @Input() message: IMessage = { content: '', received: true, receivedAt: new Date(2023, 10, 8, 17, 30, 0) }
}
