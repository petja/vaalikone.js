import React from 'react'
import Table, {
    TableCell,
    TableRow,
} from 'material-ui/Table'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    root            : {
        //
    },
    avatar          : {
        display         : 'inline-block',
        verticalAlign   : 'middle',
        marginRight     : '1em',
    },
})

function CandidateRow({candidate, party, score, classes}) {
    if(!candidate) return null

    const scoreFormatted = (score ? `${Math.round(score * 100)} %` : null)

    return (
        <TableRow>
            <TableCell numeric>{scoreFormatted}</TableCell>
            <TableCell>
                <Avatar src='https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=80' className={classes.avatar} />
                {candidate.name}
            </TableCell>
            <TableCell numeric></TableCell>
            <TableCell>{party}</TableCell>
        </TableRow>
    )
}

export default withStyles(styles)(CandidateRow)
