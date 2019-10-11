import { IRouterConfig } from '@/router/types'
export interface IAppState {
  sidebarOpen: boolean;
  menuList: IRouterConfig[];
}

export interface IGettersState {
  sidebarOpen: (state: IAppState) => boolean,
  menuList: (state: IAppState) => IRouterConfig[]
}

export interface IRootState {
  app: IAppState,
}
