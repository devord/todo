import { Action } from 'redux'

export interface Item {
  id: number
  title: string
  description: string
  labels: number[]
}

export interface Label {
  id: number
  name: string
}

export interface LoadingState {
  items: boolean
  labels: boolean
}

export interface ApplicationState {
  loading: LoadingState
  items: { [id: number]: Item }
  labels: { [id: number]: Label }
}

export interface LoadItemsRequest extends Action {
  type: 'loadItemsRequest'
}

export interface LoadItemsSuccess extends Action {
  type: 'loadItemsSuccess'
  items: Item[]
}

export interface LoadItemsFailure extends Action {
  type: 'loadItemsFailure'
}

export interface LoadLabelsRequest extends Action {
  type: 'loadLabelsRequest'
}

export interface LoadLabelsSuccess extends Action {
  type: 'loadLabelsSuccess'
  labels: Label[]
}

export interface LoadLabelsFailure extends Action {
  type: 'loadLabelsFailure'
}

export type ApplicationAction =
  | LoadItemsRequest
  | LoadItemsSuccess
  | LoadItemsFailure
  | LoadLabelsRequest
  | LoadLabelsSuccess
  | LoadLabelsFailure
