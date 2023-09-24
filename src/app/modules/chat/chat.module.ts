import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';



@NgModule({
  declarations: [
    ChatComponent,
    ProfileComponent,
    HistoryComponent
  ],
  imports: [
    RouterModule.forChild(ChatRoutes),
    CommonModule
  ]
})
export class ChatModule { }
