import { map, sortBy } from 'lodash/fp'

import { ApplicationState } from 'store/types'

export const getItems = (state: ApplicationState) =>
  sortBy(
    ['title'],
    map(
      item => ({
        ...item,
        labels: map(id => state.labels[id] || undefined, item.labels)
      }),
      state.items
    )
  )

export const getLabels = (state: ApplicationState) => state.labels
