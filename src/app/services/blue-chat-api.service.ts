import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlueChatApiService {
  private readonly _baseUrl: string = 'http://localhost:1859/api/v1/';

  constructor(
    private _client: HttpClient,
  ) { }

  public listMessage(groupId: string): Observable<any> {
    return this._client.post<any>(`${this._baseUrl}/BlueChat/ListMessage`, { guid: groupId });
  }
}
