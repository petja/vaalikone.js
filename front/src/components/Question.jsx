import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import {CheckCircle} from '@material-ui/icons'

const EmptyState = ({onStart}) => (
    <React.Fragment>
        <Typography variant='headline' gutterBottom>Vaalikone</Typography>
        <Typography gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae eleifend dui. Nunc sagittis purus nibh, at lacinia quam dignissim non. Sed id nulla auctor, interdum metus sit amet, condimentum purus. Morbi sodales arcu quis augue semper consectetur. Ut lacinia lobortis faucibus. Duis cursus velit ut erat tristique, ac tincidunt eros ultrices. Suspendisse potenti. Nullam tempus leo eu magna ullamcorper commodo. Duis odio nunc, lacinia vitae euismod id, hendrerit a mi.</Typography>

        <Button
            variant='raised'
            onClick={onStart}
            children='Aloita'
        />
    </React.Fragment>
)

const listCheckmark = (
    <ListItemIcon
        children={<CheckCircle />}
    />
)

const Question = ({id, text, currentAnswer, options, allOptions, onAnswer, onStart}) => (
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
                    {currentAnswer === optionId ? listCheckmark : null}
                    <ListItemText inset={currentAnswer !== optionId} primary={allOptions[optionId]} />
                </ListItem>
            ))}
        </List>

    </React.Fragment>
)

const QuestionContainer = props => (
    <Card>
        <CardContent>
            {props.id ? Question(props) : EmptyState(props)}
        </CardContent>
    </Card>
)

export default QuestionContainer
