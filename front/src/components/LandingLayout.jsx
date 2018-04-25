import React from 'react'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'

import FixedWidth from '../components/FixedWidth.jsx'
import ConstituencySelect from '../components/ConstituencySelect.jsx'
import Toolbar from '../containers/Toolbar.jsx'

import {withRouter} from 'react-router-dom'

const styles = theme => ({
    root            : {
        padding         : '2em',
        position        : 'relative',
        zIndex          : theme.zIndex.floatingBody,
        margin          : '64px auto',
        textAlign       : 'center',
    },
})

const LandingLayout = ({match, election, classes, getElectionInfo}) => {
    if(!election.name) getElectionInfo(match.params.election)

    return (
        <React.Fragment>

            <Toolbar rows={3} />

            <FixedWidth>
                <Paper className={classes.root}>
                    <Typography variant='display1' gutterBottom>{election.name || 'Vaalikone'}</Typography>
                    <Typography gutterBottom>Vastaa kysymyksiin ja löydä sinulle parhaiten sopiva ehdokas</Typography>

                    <br /><br />
                    <ConstituencySelect items={election.constituencies || []} />
                    <br /><br />
                    <br /><br />

                    <Button
                        color='secondary'
                        variant='raised'
                        size='large'
                        onClick={() => console.log(match.params.election, constituency)}
                    >
                        Käynnistä vaalikone
                    </Button>
                </Paper>
            </FixedWidth>

        </React.Fragment>
    )
}

export default withRouter(withStyles(styles)(LandingLayout))
