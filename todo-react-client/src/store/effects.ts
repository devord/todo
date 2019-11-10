import { ThunkAction } from 'redux-thunk'

import * as itemService from 'services/items'
import * as labelService from 'services/labels'

import { ApplicationState, ApplicationAction } from './types'
import {
  loadItemsRequest,
  loadItemsSuccess,
  loadItemsFailure,
  loadLabelsRequest,
  loadLabelsSuccess,
  loadLabelsFailure
} from './actions'

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>

export const loadItems = (): Effect => async (dispatch, getState) => {
  dispatch(loadItemsRequest())
  try {
    const items = await itemService.loadItems()
    dispatch(loadItemsSuccess(items))
  } catch (e) {
    dispatch(loadItemsFailure())
  }
}

export const loadLabels = (): Effect => async (dispatch, getState) => {
  dispatch(loadLabelsRequest())
  try {
    const labels = await labelService.loadLabels()
    dispatch(loadLabelsSuccess(labels))
  } catch (e) {
    dispatch(loadLabelsFailure())
  }
}
