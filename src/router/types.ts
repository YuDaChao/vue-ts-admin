export interface IRouterConfig {
  path: string;
  name?: string;
  component?: any;
  children?: IRouterConfig[];
  meta?: any;
  hidden?: boolean;
  alwaysShow?: boolean;
  noShowingChildren?: boolean;
  redirect?: string;
}
