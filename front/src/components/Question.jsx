import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Radio from 'material-ui/Radio'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import ReasoningList from '../containers/ReasoningList.jsx'
import ReasoningEditor from '../containers/ReasoningEditor.jsx'

//import {CheckCircle} from '@material-ui/icons'

const styles = theme => ({
    picture         : {
        maxWidth        : '100em',
        width           : '100%',
    },
    nextButton      : {
        float           : 'right',
    },
    section         : {
        padding         : '1em',
    },
})

const EmptyState = ({onNextQuestion, classes}) => (
    <React.Fragment>
        <Typography variant='headline' gutterBottom>Tervetuloa vaalikoneeseen</Typography>
        <Typography gutterBottom>Tähän jokin esittelyteksti :)</Typography>

        <Button
            variant='raised'
            color='secondary'
            onClick={onNextQuestion}
            children='Aloita'
        />
    </React.Fragment>
)

const Question = ({questionId, text, currentAnswer, options, onAnswer, onNextQuestion, onRemoveAnswer, classes}) => {

    const headline = (
        <Typography variant='headline'>{text}</Typography>
    )

    const inputTitle = (
        <Typography color='secondary' variant='subheading'>
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
            <Radio
                checked={currentAnswer === option.id}
                tabIndex='-1'
            />
            <ListItemText inset={currentAnswer !== option.id} primary={option.text} />
        </ListItem>
    ))

    const optionList = (
        <List children={optionItems} />
    )

    const nextButton = (
        <Button
            children='Seuraava kysymys'
            variant='raised'
            color='secondary'
            disabled={!currentAnswer}
            className={classes.nextButton}
            onClick={onNextQuestion}
        />
    )

    const removeAnswerButton = (
        <Button
            children='Poista vastaukseni'
            onClick={() => onRemoveAnswer(questionId)}
        />
    )

    const skipButton = (
        <Button
            children='Ohita kysymys'
            onClick={onNextQuestion}
        />
    )

    const secondaryButton = (
        currentAnswer ?
        removeAnswerButton :
        skipButton
    )

    return (
        <React.Fragment>
            <div className={classes.section}>
                {headline}
            </div>

            <Divider />

            <div className={classes.section}>
                <ReasoningList questionId={questionId} />
            </div>

            <Divider />

            <div className={classes.section}>
                {inputTitle}
                {optionList}
                <ReasoningEditor />
            </div>

            <Divider />

            <div className={classes.section}>
                {secondaryButton}
                {nextButton}
            </div>
        </React.Fragment>
    )
}

const QuestionContainer = props => (
    <Card>
        <CardContent>
            {props.questionId ? Question(props) : EmptyState(props)}
        </CardContent>
    </Card>
)

export default withStyles(styles)(QuestionContainer)
