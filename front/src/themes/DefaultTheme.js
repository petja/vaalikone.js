import React from 'react'
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles'

import primaryColor from 'material-ui/colors/lightBlue'
import secondaryColor from 'material-ui/colors/green'

export const theme = createMuiTheme({
    palette             : {
        type                : 'dark',
        primary             : primaryColor,
        secondary           : secondaryColor,
        background          : {
            paper               : '#0c191f',
        },
    },
    zIndex              : {
        floatingBody        : 1150,
        bottomNavigation    : 1175,
    },
})

export const ThemeProvider = ({...props}) => (
    <MuiThemeProvider theme={theme} {...props} />
)

export {
    primaryColor,
    secondaryColor,
}
