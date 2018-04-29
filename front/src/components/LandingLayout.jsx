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

const LandingLayout = ({match, election, classes}) => (
    <React.Fragment>

        <Toolbar rows={3} />

        <FixedWidth>
            <Paper className={classes.root}>
                <Typography variant='display1' gutterBottom>{election.name || 'Vaalikone'}</Typography>
                <Typography gutterBottom>Vastaa kysymyksiin ja löydä sinulle parhaiten sopiva ehdokas</Typography>

                <br /><br />
                <ConstituencySelect items={election.constituencies || {}} />
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

                <br /><br />
                <Typography variant='caption'>Sivusto kerää ja tallentaa tietoja sivuston käyttäjistä ja käyttötavoista paremman käyttäjäkokemuksen takaamiseksi. Näitä tietoja saatetaan jakaa kolmansien osapuolien kanssa, jotka voivat sijaita myös EU-alueen ulkopuolella. Tämä ilmoitus on sinänsä turha, koska harvassa on sivustot jotka eivät näin jo tekisi. Kiitos kuitenkin lainsäädännön, näitä itsestäänselviä ilmoituksia tulee laatia sekä käyttäjää että devaajaa ärsyttämään. Jatkamalla sivuston käyttöä, hyväksyt nämä ehdot.</Typography>
            </Paper>
        </FixedWidth>

    </React.Fragment>
)

export default withRouter(withStyles(styles)(LandingLayout))
