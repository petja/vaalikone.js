import React from 'react'

import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'

import SwipeableViews from 'react-swipeable-views'

const styles = theme => ({
    root            : {
        maxWidth        : '25em',
        margin          : '10em auto',
        padding         : '2em',
    },
    button          : {
        marginTop       : '1em',
        float           : 'right',
    },
    center          : {
        padding         : '4em 0',
    },
})

const NextButton = ({classes}) => (
    <Button
        variant='raised'
        color='secondary'
        children='Jatka'
        type='submit'
        className={classes.button}
    />
)

const EmailPage = ({classes}) => (
    <div>
        <div className={classes.center}>
            <TextField
                label='Sähköpostiosoite'
                type='email'
                fullWidth
            />
        </div>

        <NextButton classes={classes} />
    </div>
)

const PasswordPage = ({classes}) => (
    <div>
        <div className={classes.center}>
            <TextField
                label='Salasana'
                type='password'
                fullWidth
            />
        </div>

        <NextButton classes={classes} />
    </div>
)

const handleSubmit = (e, {page}) => {
    e.preventDefault()
    alert("submit")
}

const LoginView = ({page, classes, onChangePage}) => (
    <form onSubmit={e => handleSubmit(e, {page})}>
        <Paper classes={{root: classes.root}}>

            <Typography variant='display1'>Kirjaudu sisään</Typography>
            <Typography>käyttäen puoluetoimiston sinulle jakamia tunnuksia</Typography>
            
            <SwipeableViews disabled>
                <EmailPage classes={classes} />
                <PasswordPage classes={classes} />
            </SwipeableViews>

        </Paper>
    </form>
)

export default withStyles(styles)(LoginView)
