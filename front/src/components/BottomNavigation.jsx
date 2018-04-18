import React from 'react'

import { withRouter } from 'react-router-dom'

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import { withStyles } from 'material-ui/styles'

import {QuestionAnswer, People, Info} from '@material-ui/icons'

const styles = theme => ({
    root            : {
        position        : 'fixed',
        bottom          : 0,
        left            : 0,
        width           : '100%',
        zIndex          : theme.zIndex.bottomNavigation,
        boxShadow       : '0 0 0.5em rgba(0,0,0,0.25)',
        background      : '#424242',
    },
    selected        : {
        color           : theme.palette.secondary['A400'],
    },
})

const actions = [
    ['Kysymykset', '/', <QuestionAnswer />],
    ['Ehdokkaat', '/candidates', <People />],
    ['Tietoja', '/about', <Info />],
]

function NavigationBar(props) {
    const {classes, history, location} = props

    return (
        <BottomNavigation
            value={location.pathname}
            showLabels
            className={classes.root}
            onChange={(e, url) => history.push(url)}
        >
            {actions.map(action => (
                <BottomNavigationAction
                    label={action[0]}
                    key={action[1]}
                    value={action[1]}
                    icon={action[2]}
                    classes={{selected: classes.selected}}
                />
            ))}
        </BottomNavigation>
    )
}

export default withRouter(withStyles(styles)(NavigationBar))
