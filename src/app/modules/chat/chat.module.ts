import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routing';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    RouterModule.forChild(ChatRoutes),
    CommonModule
  ]
})
export class ChatModule { }
