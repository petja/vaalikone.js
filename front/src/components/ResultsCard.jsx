import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'

import {withRouter} from 'react-router-dom'

//import {CheckCircle} from '@material-ui/icons'


const styles = theme => ({
    root            : {
        position        : 'sticky',
        top             : `${theme.spacing.unit}px`,
    },
    avatar          : {
        //
    },
})

function getTheBestOnes(candidates, scoreboard) {
    return Object.keys(candidates).map(candidateId => ({
        ...candidates[candidateId],
        id              : candidateId,
        score           : scoreboard[candidateId],
    })).sort((a, b) => {
        return a.score - b.score
    }).slice(0, 3)
}

function createList({candidates, scoreboard, classes}) {
    return getTheBestOnes(candidates, scoreboard).map(candidate => (
        <ListItem key={candidate.id}>
            <Avatar src='https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=80' className={classes.avatar} />
            <ListItemText primary={candidate.name} secondary='Puolueen nimi' />
        </ListItem>
    ))
}

const ResultsCard = (props) => (
    <Card className={props.classes.root}>
        <CardContent>
            <Typography variant='headline' gutterBottom>Omat ehdokkaat</Typography>
            <Typography gutterBottom>Nämä ehdokkaat sopivat sinulle parhaiten</Typography>

            <List
                children={createList(props)}
            />

            <Button
                children='Näytä kaikki'
                onClick={() => props.history.push('/candidates')}
            />
        </CardContent>
    </Card>
)

export default withRouter(withStyles(styles)(ResultsCard))
