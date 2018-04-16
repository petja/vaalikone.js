import React from 'react'

import classnames from 'classnames'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {blue} from 'material-ui/colors'
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
        background          : blue['A400'],
    },
    done                : {
        background          : theme.palette.secondary['A400'],
    },
})

function createTitle({completed, questions}) {
    if(completed.length === 0) return (
        <Typography gutterBottom>{questions.length} kysymystä. Aloita vastaaminen.</Typography>
    )

    return (
        <Typography gutterBottom>Olet vastannut {completed.length}/{questions.length} kysymykseen</Typography>
    )
}

const QuestionProgress = ({questions, completed, activeQuestion, onChangeQuestion, classes}) => (
    <Paper className={classes.root}>
        {createTitle({completed, questions})}

        {questions.map(questionId => (
            <div
                key={questionId}
                className={classnames(
                    classes.item,
                    {
                        [classes.active]: activeQuestion === questionId,
                        [classes.done]: completed.includes(questionId)
                    }
                )}
                onClick={() => onChangeQuestion(questionId)}
            />
        ))}
    </Paper>
)

export default withStyles(styles)(QuestionProgress)
