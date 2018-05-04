import React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
//import QuestionListItem from '../components/QuestionListItem.jsx'

const QuestionListItem = ({ id, text, options, constituencies }) => (
    <ListItem button>
        <ListItemText primary={text} secondary={JSON.stringify(options)} />
    </ListItem>
)

export default QuestionListItem
