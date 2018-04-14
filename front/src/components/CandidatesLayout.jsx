import React from 'react'

import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'

import CandidateList from '../containers/CandidateList.jsx'

const styles = theme => ({
    root            : {
        position        : 'relative',
        zIndex          : theme.zIndex.floatingBody,
        margin          : '64px auto',
        maxWidth        : '70em',
    },
})

function CandidatesLayout({classes}) {
    return (
        <Grid container className={classes.root} spacing={8}>
            <Grid item sm={12} md={12} children={<CandidateList />} />
        </Grid>
    )
}

export default withStyles(styles)(CandidatesLayout)
