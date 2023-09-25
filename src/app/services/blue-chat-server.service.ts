import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../modules/chat/components/history/Message';
import { MessageServiceService } from './message-service.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlueChatServerService {
  private readonly _baseUrl: string = 'wss://localhost:5128/ws';
  private readonly _socket: WebSocket;
  token: string = '';

  message: string = '';
  // receivedMessage: Message = { conteudo: '', data: '', recebida: false };

  constructor(
    private _messageService: MessageServiceService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.token = params['Token'];
    });

    this._socket = new WebSocket(`${this._baseUrl}?Token=${this.token}`);

    this._socket.addEventListener('open', (event) => {
      console.log('Conexão WebSocket aberta:', event);

      this._socket.addEventListener('message', (event) => {

        let receivedMessage: Message = JSON.parse(event.data);

        const listaAtual = this._messageService._messages.value;

        let test = listaAtual[receivedMessage.GrupoGuid];
        if (test == undefined) {
          listaAtual[receivedMessage.GrupoGuid] = [receivedMessage];
        }
        else {
          listaAtual[receivedMessage.GrupoGuid].push(receivedMessage);
        }
        console.log(listaAtual)

        this._messageService._messages.next(listaAtual);
      });
    });

    this._socket.addEventListener('error', (event) => {
      console.error('Erro WebSocket:', event);
    });
  }

  connect() {

  }

  sendMessage() {
    if (this._socket.readyState === WebSocket.OPEN) {
      this._socket.send(this.message);
      this.message = '';
    } else {
      console.error('Conexão WebSocket não está aberta.');
    }
  }

}
