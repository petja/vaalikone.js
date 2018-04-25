import React from 'react'

import {withStyles} from 'material-ui'
import classnames from 'classnames'

const styles = theme => ({
    root            : {
        width           : '100%',
        maxWidth        : '70em',
        margin          : '0 auto',
    },
})

const FixedWidth = ({classes, className, ...rest}) => (
    <div
        className={classnames(className, classes.root)}
        {...rest}
    />
)

export default withStyles(styles)(FixedWidth)
