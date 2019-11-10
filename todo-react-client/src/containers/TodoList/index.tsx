import React from 'react'
import { isEmpty, map } from 'lodash/fp'
import { useDispatch } from 'react-redux'

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'lib/material'
import { Delete as DeleteIcon } from 'lib/material-icons'
import { loadItems, loadLabels } from 'store/effects'
import { getItems, getLabels } from 'store/selectors'
import { useSelector } from 'store'

const TodoList = () => {
  const dispatch = useDispatch()

  const items = useSelector(getItems)

  const labels = useSelector(getLabels)

  React.useEffect(() => {
    dispatch(loadItems())
  }, [dispatch])

  React.useEffect(() => {
    if (isEmpty(labels)) {
      dispatch(loadLabels())
    }
  }, [dispatch, labels])

  return (
    <List>
      {map(
        item => (
          <ListItem button divider key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={
                <span>{map(label => label.name, item.labels).join(', ')}</span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton aria-label='Delete'>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ),
        items
      )}
    </List>
  )
}

export default TodoList
