import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { MensagemComponent } from './components/history/mensagem/mensagem.component';
import { ChatNavComponent } from './components/chat-nav/chat-nav.component';
import { ConversationComponent } from './components/chat-nav/conversation/conversation.component';



@NgModule({
  declarations: [
    ChatComponent,
    ProfileComponent,
    HistoryComponent,
    MensagemComponent,
    ChatNavComponent,
    ConversationComponent
  ],
  imports: [
    RouterModule.forChild(ChatRoutes),
    CommonModule
  ]
})
export class ChatModule { }
