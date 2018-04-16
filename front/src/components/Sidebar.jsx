import React from 'react'

import {withStyles} from 'material-ui/styles'

import ResultsCard from '../containers/ResultsCard.jsx'
import QuestionProgress from '../containers/QuestionProgress.jsx'

const styles = theme => ({
    root                : {
        position            : 'sticky',
        top                 : `${theme.spacing.unit}px`,
    },
    item                : {
        marginBottom        : `${theme.spacing.unit}px`,
    },
})

const Sidebar = ({classes}) => (
    <div className={classes.root}>
        <ResultsCard classes={{root: classes.item}} />
        <QuestionProgress classes={{root: classes.item}} />
    </div>
)

export default withStyles(styles)(Sidebar)
