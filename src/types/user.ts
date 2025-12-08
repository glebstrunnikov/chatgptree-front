export interface IUser {
  email: string
  name?: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface IUserResponse extends IUser {
  accessToken: string
}
