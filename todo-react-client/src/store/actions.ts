import {
  Item,
  Label,
  LoadItemsRequest,
  LoadItemsSuccess,
  LoadItemsFailure,
  LoadLabelsRequest,
  LoadLabelsSuccess,
  LoadLabelsFailure
} from './types'

export const loadItemsRequest = (): LoadItemsRequest => ({
  type: 'loadItemsRequest'
})

export const loadItemsSuccess = (items: Item[]): LoadItemsSuccess => ({
  type: 'loadItemsSuccess',
  items
})

export const loadItemsFailure = (): LoadItemsFailure => ({
  type: 'loadItemsFailure'
})

export const loadLabelsRequest = (): LoadLabelsRequest => ({
  type: 'loadLabelsRequest'
})

export const loadLabelsSuccess = (labels: Label[]): LoadLabelsSuccess => ({
  type: 'loadLabelsSuccess',
  labels
})

export const loadLabelsFailure = (): LoadLabelsFailure => ({
  type: 'loadLabelsFailure'
})
