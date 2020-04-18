export interface ILogin {
  userName: string | undefined;
  password: string | undefined;
  userAvatar: string | undefined;
  isChecked: boolean;
}

export interface LoginFormInfo {
  name: string;
  password: string;
  isChecked: boolean
}

export interface UserOptAction {
  userInfo: LoginFormInfo;
  rememberState: boolean;
}

export interface UserResponse {
  flag: number;
  data: ILogin;
  msg: string | undefined;
}
