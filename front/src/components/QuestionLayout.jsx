import React from 'react'

import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'

import Question from '../containers/Question.jsx'
import ResultsCard from '../containers/ResultsCard.jsx'

const styles = theme => ({
    root            : {
        position        : 'relative',
        zIndex          : theme.zIndex.floatingBody,
        margin          : '64px auto',
        maxWidth        : '70em',
    },
})

function QuestionLayout({classes}) {
    return (
        <Grid container className={classes.root} spacing={8}>
            <Grid item sm={12} md={8} children={<Question />} />
            <Grid item sm={12} md={4} children={<ResultsCard />} />
        </Grid>
    )
}

export default withStyles(styles)(QuestionLayout)
