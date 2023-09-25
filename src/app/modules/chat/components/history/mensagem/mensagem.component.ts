import { Component, Input } from '@angular/core';
import { Message } from '../Message';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  @Input() messageContent: Message = { content: '', dtEnvio: '', GrupoGuid: '', user: '' };
}
