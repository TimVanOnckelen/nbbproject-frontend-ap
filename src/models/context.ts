import { IBackendAPI } from "../services/api"

export interface IAppContext {
    api: IBackendAPI | undefined
    token: string
}