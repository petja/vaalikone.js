import React from 'react'

import classnames from 'classnames'

import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'

const styles = theme => ({
    root                : {
        padding             : `${theme.spacing.unit * 3}px`,
    },
    item                : {
        background          : '#808080',
        width               : '0.8em',
        height              : '0.8em',
        display             : 'inline-block',
        margin              : '0 1px 1px 0',
        cursor              : 'pointer',
    },
    active              : {
        background          : theme.palette.secondary['A400'],
    },
})

const QuestionProgress = ({questions, completed, onChangeQuestion, classes}) => (
    <Paper className={classes.root}>
        {questions.map(questionId => (
            <div
                className={classnames(
                    classes.item,
                    {
                        [classes.active]: completed.includes(questionId)
                    }
                )}
                onClick={() => onChangeQuestion(questionId)}
            />
        ))}
    </Paper>
)

export default withStyles(styles)(QuestionProgress)
