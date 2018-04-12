import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Radio from 'material-ui/Radio'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

import {CheckCircle} from '@material-ui/icons'

const styles = theme => ({
    picture         : {
        maxWidth        : '100em',
        width           : '100%',
    },
})

const EmptyState = ({onStart, classes}) => (
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
            onClick={onStart}
            children='Aloita'
        />
    </React.Fragment>
)

const Question = ({id, text, currentAnswer, options, allOptions, onAnswer, onStart, classes}) => (
    <React.Fragment>

        <Typography variant='headline'>{text}</Typography>

        <br />
        <Divider />
        <br />
        <Typography variant='subheading'>{'Perusteluita puolesta ja vastaan'}</Typography>
        <Typography>Lorem Ipsum Dolor Sit Amet</Typography>
        <br />

        <Divider />
        <br />
        <Typography variant='subheading'>{'Mitä vastaat?'}</Typography>

        <List>
            {(options || []).map(optionId => (
                <ListItem
                    button
                    key={optionId}
                    onClick={() => onAnswer(id, optionId)}
                >
                    <Radio
                        checked={currentAnswer === optionId}
                    />
                    <ListItemText inset={currentAnswer !== optionId} primary={allOptions[optionId]} />
                </ListItem>
            ))}
        </List>

        <br />
        <Divider />
        <br />

        <Button
            children='Ohita kysymys'
        />
        <Button
            variant='raised'
            color='secondary'
            disabled={!currentAnswer}
            children='Seuraava kysymys'
        />

    </React.Fragment>
)

const QuestionContainer = props => (
    <Card>
        <CardContent>
            {props.id ? Question(props) : EmptyState(props)}
        </CardContent>
    </Card>
)

export default withStyles(styles)(QuestionContainer)
