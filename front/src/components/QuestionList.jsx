import React from 'react'

import List, { ListItem, ListItemText } from 'material-ui/List'

import QuestionListItem from '../components/QuestionListItem.jsx'

import { Add } from '@material-ui/icons'

const QuestionList = ({ questions, userRole }) => (
    <List>
        {Object.keys(questions).map(questionId => (
            <QuestionListItem
                id={questionId}
                key={questionId}
                {...questions[questionId]}
            />
        ))}

        <ListItem button onClick={() => alert('Coming soon!')}>
            <ListItemText primary="Luo kysymys" />
        </ListItem>

        <hr />
    </List>
)

export default QuestionList
