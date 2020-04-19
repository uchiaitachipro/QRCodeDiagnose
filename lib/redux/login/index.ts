import { Dispatch } from "redux";
import {
  START_LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAIL_ACTION,
  REMEMBER_ACCOUNT_ACTION,
  GET_LOCAL_LOGIN_RECORD,
} from "../../constants/actions";
import {
  LoginFormInfo,
  UserOptAction,
  UserResponse,
} from "../../interfaces/User";
import { LOGIN_URL } from "../../constants/urls";
import { get } from "../../utils/request";
import { AxiosResponse } from "axios";
import {History} from 'history'
type Action = {
  type: string;
  payload: UserOptAction;
};

const initialState = {};

export function getLocalRecord() {
  return (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
      //todo: 读取本地数据
      resolve({
        userName: undefined,
        password: undefined,
        userAvatar: undefined,
        isChecked: false,
      });
    }).then((data) => {
      dispatch({
        type: GET_LOCAL_LOGIN_RECORD,
        payload: data,
      });
    });
  };
}

export function login(loginFormInfo: LoginFormInfo,history : History) {
  return (dispatch: Dispatch) => {
    get(LOGIN_URL, loginFormInfo)
      .then((res: AxiosResponse<UserResponse>) => {
        // dispatch({
        //   type: LOGIN_SUCCESS_ACTION,
        //   payload: res.data,
        // });
        //todo: 存储数据
          history.push('/home/news')
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default function (state = {}, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      return {
        ...action.payload,
      };
    case GET_LOCAL_LOGIN_RECORD:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
