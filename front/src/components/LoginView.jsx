import React from 'react'

// Local
import localForage from '../models/db'

// Material UI
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'

// Third party
import SwipeableViews from 'react-swipeable-views'

const PAGE_EMAIL = 0
const PAGE_PASSWORD = 1

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

class LoginView extends React.Component {
    state = {
        page                : PAGE_EMAIL,
    }

    render() {

        const {classes} = this.props

        const nextButton = (
            <Button
                variant='raised'
                color='secondary'
                children='Jatka'
                type='submit'
                className={classes.button}
            />
        )

        const emailPage = (
            <form onSubmit={this.handleSubmit} action='#'>
                <div className={classes.center}>
                    <TextField
                        label='Sähköpostiosoite'
                        type='email'
                        name='email'
                        required
                        fullWidth
                        autoFocus
                        onChange={this.setFieldValue}
                    />
                </div>

                {nextButton}
            </form>
        )

        const passwordPage = (
            <form onSubmit={this.handleSubmit} action='#'>
                <div className={classes.center}>
                    <TextField
                        label='Salasana'
                        type='password'
                        name='password'
                        required
                        fullWidth
                        autoFocus
                        onChange={this.setFieldValue}
                    />
                </div>

                {nextButton}
            </form>
        )
        
        const formContents = (
            <React.Fragment>
                <Typography variant='display1'>Kirjaudu sisään</Typography>
                <Typography>käyttäen puoluetoimiston sinulle jakamia tunnuksia</Typography>

                <SwipeableViews disabled index={this.state.page}>
                    {emailPage}
                    {passwordPage}
                </SwipeableViews>
            </React.Fragment>
        )

        return (
            <Paper classes={{root: classes.root}}>
                {formContents}
            </Paper>
        )

    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.page === PAGE_EMAIL) this.goPasswordPage()
        if (this.state.page === PAGE_PASSWORD) this.initLogin()
    }

    setFieldValue = e => {
        this.setState({
            [e.target.name]     : e.target.value,
        })
    }

    async initLogin () {

        const loginResp = await fetch('/api/login', {
            method              : 'POST',
            headers             : {
                'Content-Type'      : 'application/json',
            },
            body                : JSON.stringify({
                email               : this.state.email,
                password            : this.state.password,
            })
        }).then(resp => resp.json())

        await localForage.setItem('auth_token', loginResp.token)

    }

    goEmailPage() {
        this.setState({
            page                : PAGE_EMAIL,
        })
    }

    goPasswordPage() {
        this.setState({
            page                : PAGE_PASSWORD,
        })
    }
}

export default withStyles(styles)(LoginView)
