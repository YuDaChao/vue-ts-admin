export interface IAppState {
  sidebarOpen: boolean;
}

export interface IGettersState {
  sidebarOpen: (state: IAppState) => boolean,
}

export interface IRootState {
  app: IAppState
}
