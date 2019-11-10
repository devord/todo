import produce from 'immer'
import { keyBy } from 'lodash/fp'

import { ApplicationState, ApplicationAction } from './types'

export const initialState: ApplicationState = {
  loading: {
    items: false,
    labels: false
  },
  items: {},
  labels: {}
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case 'loadItemsRequest':
      return produce(state, draft => {
        draft.loading.items = true
      })
    case 'loadItemsSuccess':
      return produce(state, draft => {
        draft.loading.items = false
        draft.items = keyBy('id', action.items)
      })
    case 'loadItemsFailure':
      return produce(state, draft => {
        draft.loading.items = false
      })
    case 'loadLabelsRequest':
      return produce(state, draft => {
        draft.loading.labels = true
      })
    case 'loadLabelsSuccess':
      return produce(state, draft => {
        draft.loading.labels = false
        draft.labels = keyBy('id', action.labels)
      })
    case 'loadLabelsFailure':
      return produce(state, draft => {
        draft.loading.labels = false
      })
    default:
      return state
  }
}

export default reducer
