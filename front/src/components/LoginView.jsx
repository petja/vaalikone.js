import React from 'react'

// Local

// Material UI
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { DialogContent, DialogTitle } from 'material-ui/Dialog'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    root: {
        maxWidth: '25em',
        margin: '10em auto',
        padding: '2em',
    },
    button: {
        marginTop: '1em',
        float: 'right',
    },
    center: {
        padding: '4em 0',
    },
})

class LoginView extends React.Component {
    state = {}

    render() {
        const { classes } = this.props

        const form = (
            <form onSubmit={this.handleSubmit} action="#">
                <TextField
                    label="Sähköpostiosoite"
                    type="email"
                    name="email"
                    required
                    fullWidth
                    autoFocus
                    onChange={this.setFieldValue}
                />

                <br />
                <br />

                <TextField
                    label="Salasana"
                    type="password"
                    name="password"
                    required
                    fullWidth
                    autoFocus
                    onChange={this.setFieldValue}
                />

                <br />
                <br />

                <Button
                    variant="raised"
                    color="secondary"
                    children="Kirjaudu"
                    type="submit"
                    className={classes.button}
                />
            </form>
        )

        return (
            <React.Fragment>
                <DialogTitle>Kirjaudu sisään</DialogTitle>
                <DialogContent>{form}</DialogContent>
            </React.Fragment>
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.initLogin()
    }

    setFieldValue = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    async initLogin() {
        const loginResp = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        }).then(resp => resp.json())

        await this.props.onLogin(loginResp.token)
    }

    goEmailPage() {
        this.setState({
            page: PAGE_EMAIL,
        })
    }

    goPasswordPage() {
        this.setState({
            page: PAGE_PASSWORD,
        })
    }
}

export default withStyles(styles)(LoginView)
