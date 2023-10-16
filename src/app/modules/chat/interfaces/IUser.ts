export interface IUser {
  name: string,
  profile_pic: string,
  active?: boolean,
  active_in?: Date
}

export interface IUserItemList extends IUser {
  open_chat: boolean
}
