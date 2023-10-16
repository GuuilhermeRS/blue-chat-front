import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/IUser';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  @Input() public user: IUser = {
    name: '',
    profile_pic: ''
  };

  constructor() { }
}
