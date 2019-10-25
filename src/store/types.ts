import { IRouterConfig } from "@/router/types";
import { IAppState } from "./modules/app/types";
import { IUserState } from "./modules/user/types";

export interface IGettersState {
  sidebarOpen: (state: IAppState) => boolean;
  menuList: (state: IAppState) => IRouterConfig[];
}

export interface IRootState {
  app: IAppState;
  user: IUserState;
}
