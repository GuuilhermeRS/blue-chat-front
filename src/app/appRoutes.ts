import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";


export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: 'chat', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) }
    ]
  }
];
