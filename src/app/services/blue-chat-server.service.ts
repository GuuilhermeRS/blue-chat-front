import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../modules/chat/components/history/Message';

@Injectable({
  providedIn: 'root'
})
export class BlueChatServerService {
  private readonly _baseUrl: string = 'wss://localhost:5128/ws';
  private readonly _socket: WebSocket;

  message: string = '';
  receivedMessage: Message = { conteudo: '', data: '', recebida: false };

  constructor() {
    this._socket = new WebSocket(`${this._baseUrl}?Token=55dea505-05ce-40e3-8e73-d731354d4662`);

    this._socket.addEventListener('open', (event) => {
      console.log('Conexão WebSocket aberta:', event);

      this._socket.addEventListener('message', (event) => {
        this.receivedMessage = JSON.parse(event.data);
      });
    });

    this._socket.addEventListener('error', (event) => {
      console.error('Erro WebSocket:', event);
    });
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
