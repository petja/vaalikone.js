import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Radio from 'material-ui/Radio'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import {CheckCircle} from '@material-ui/icons'

import Testimonial from '../components/Testimonial.jsx'

const styles = theme => ({
    picture         : {
        maxWidth        : '100em',
        width           : '100%',
    },
    nextButton      : {
        float           : 'right',
    },
})

const EmptyState = ({onNextQuestion, classes}) => (
    <React.Fragment>
        <img
            src='https://images.pexels.com/photos/131743/pexels-photo-131743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            className={classes.picture}
        />

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

const removeButton = ({onClick}) => (
    <Button
        children='Ohita kysymys'
    />
)

const Question = ({questionId, text, currentAnswer, options, onAnswer, onNextQuestion, onRemoveAnswer, classes}) => (
    <React.Fragment>

        <Typography variant='headline'>{text}</Typography>

        <br />
        <Divider />
        <br />
        <Typography color='secondary' variant='subheading'>{'Perusteluita puolesta ja vastaan'}</Typography>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <br />

        <Divider />
        <br />
        <Typography color='secondary' variant='subheading'>{'Mitä vastaat?'}</Typography>

        <List>
            {options.map((option, optionIndex) => (
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
            ))}
        </List>

        <br />
        <Divider />
        <br />

        {
            currentAnswer ?
            <Button children='Poista vastaukseni' onClick={() => onRemoveAnswer(questionId)} /> :
            <Button children='Ohita kysymys' onClick={onNextQuestion} />
        }

        <Button
            variant='raised'
            color='secondary'
            disabled={!currentAnswer}
            className={classes.nextButton}
            onClick={onNextQuestion}
            children='Seuraava kysymys'
        />

    </React.Fragment>
)

const QuestionContainer = props => (
    <Card>
        <CardContent>
            {props.questionId ? Question(props) : EmptyState(props)}
        </CardContent>
    </Card>
)

export default withStyles(styles)(QuestionContainer)
