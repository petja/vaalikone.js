import React from 'react'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Radio from 'material-ui/Radio'
import List, {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import { withRouter } from 'react-router-dom'
import { isEmpty } from 'lodash'

import ReasoningList from '../containers/ReasoningList.jsx'
import ReasoningEditor from '../containers/ReasoningEditor.jsx'
import QuestionList from '../containers/QuestionList.jsx'

//import {CheckCircle} from '@material-ui/icons'

const styles = theme => ({
    root: {
        padding: '1em',
    },
    picture: {
        maxWidth: '100em',
        width: '100%',
    },
    nextButton: {
        float: 'right',
    },
    section: {
        padding: '1em',
    },
})

const Question = ({
    classes,
    currentAnswer,
    election,
    fetchQuestions,
    onAnswer,
    onNextQuestion,
    onRemoveAnswer,
    options = [],
    questionId,
    text,
    userRole,
}) => {
    if (!isEmpty(election) && !questionId) fetchQuestions()

    const headline = <Typography variant="headline">{text}</Typography>

    const inputTitle = (
        <Typography color="secondary" variant="subheading">
            {'Mitä vastaat?'}
        </Typography>
    )

    const optionItems = options.map((option, optionIndex) => (
        <ListItem
            button
            key={option.id}
            onClick={() => onAnswer(questionId, option.id)}
            tabIndex={optionIndex + 1}
        >
            <Radio checked={currentAnswer === option.id} tabIndex="-1" />
            <ListItemText
                inset={currentAnswer !== option.id}
                primary={option.text}
            />
        </ListItem>
    ))

    const optionList = <List children={optionItems} />

    const nextButton = (
        <Button
            children="Seuraava kysymys"
            variant="raised"
            color="secondary"
            disabled={!currentAnswer}
            className={classes.nextButton}
            onClick={onNextQuestion}
        />
    )

    const removeAnswerButton = (
        <Button
            children="Poista vastaukseni"
            onClick={() => onRemoveAnswer(questionId)}
        />
    )

    const skipButton = (
        <Button children="Ohita kysymys" onClick={onNextQuestion} />
    )

    const secondaryButton = currentAnswer ? removeAnswerButton : skipButton

    return (
        <Paper className={classes.root}>
            <Typography>
                <pre>{JSON.stringify({ userRole }, null, 2)}</pre>
            </Typography>

            {userRole.editor ? <QuestionList /> : null}

            <div className={classes.section}>{headline}</div>

            <Divider />

            <div className={classes.section}>
                <ReasoningList questionId={questionId} />
            </div>

            <Divider />

            <div className={classes.section}>
                {inputTitle}
                {optionList}
                {userRole.candidate ? <ReasoningEditor /> : null}
            </div>

            <Divider />

            <div className={classes.section}>
                {secondaryButton}
                {nextButton}
            </div>
        </Paper>
    )
}

export default withRouter(withStyles(styles)(Question))
