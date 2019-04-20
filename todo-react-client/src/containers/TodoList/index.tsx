import React from 'react'

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'src/lib/material'
import { Delete as DeleteIcon } from 'src/lib/material-icons'

const items = [
  { title: 'Plan', tags: ['Blue'] },
  { title: 'Implement', tags: ['Blue, Red, Yellow'] },
  { title: 'Review', tags: ['Blue, Yellow'] },
  { title: 'Deploy', tags: ['Red'] }
]

const TodoList = () => (
  <React.Fragment>
    <List>
      { items.map(({ title, tags }) => (
        <ListItem button divider>
          <ListItemText
            primary={title}
            secondary={ tags.map(tag => <span>{ tag }</span>) }
          />
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )) }
    </List>
  </React.Fragment>
)

export default TodoList
