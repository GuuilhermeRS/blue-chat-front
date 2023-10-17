import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IGrupo } from 'src/app/models/interfaces/IGrupo';
import { IMessage } from 'src/app/models/interfaces/IMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentGroup$: BehaviorSubject<IGrupo | null> = new BehaviorSubject<IGrupo | null>(null);
  private group$: BehaviorSubject<IGrupo[]> = new BehaviorSubject<IGrupo[]>([
    {
      id: 1,
      guid: '',
      name: 'Grupo A',
      profile_pic: 'data:image/png;base64,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',
      active: true,
      active_in: new Date(2023, 10, 16)
    },
    {
      id: 2,
      guid: '',
      name: 'Usuário B',
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png',
      active: false,
      active_in: new Date(2023, 10, 16)
    },
    {
      id: 3,
      guid: '',
      name: 'Usuário C',
      profile_pic: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      active: false,
      active_in: new Date(2023, 10, 16)
    },
    {
      id: 4,
      guid: '',
      name: 'Grupo D',
      profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WUx40RcbMrWzkDttvsv2_JkDqm0UezjQWw&usqp=CAU',
      active: true,
      active_in: new Date(2023, 10, 16)
    },
  ]);
  private messages$: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([
    {
      group_id: 1,
      content: 'Boa tarde',
      received: true,
      receivedAt: new Date(2023, 10, 9, 17, 0, 0)
    },
    {
      group_id: 1,
      content: 'Tudo bem?',
      received: true,
      receivedAt: new Date(2023, 10, 9, 17, 1, 0)
    },
    {
      group_id: 1,
      content: 'Boa tarde',
      received: false,
      receivedAt: new Date(2023, 10, 9, 17, 1, 0)
    }
  ]);

  constructor() { }

  listGroup(): Observable<IGrupo[]>
  {
    return this.group$;
  }

  getCurrentGroup(): Observable<IGrupo | null> {
    return this.currentGroup$;
  }

  setCurrentGroup(group: IGrupo): void {
    this.currentGroup$.next(group);
  }

  getMessages(group_id: number | undefined): Observable<IMessage[]> {

    console.log('Buscando as mensagens do grupo: ', group_id);

    return this.messages$.pipe(
      map((messages: IMessage[]) => {
        return messages.filter(m => m.group_id == group_id);
      })
    );
  }
}
