import { compact, map, sortBy } from 'lodash/fp'

import { ApplicationState } from 'store/types'

export const getItems = (state: ApplicationState) =>
  sortBy(
    ['title'],
    map(
      item => ({
        ...item,
        labels: compact(map(id => state.labels[id] || undefined, item.labels))
      }),
      state.items
    )
  )

export const getLabels = (state: ApplicationState) => state.labels
