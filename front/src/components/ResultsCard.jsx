import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'

//import {CheckCircle} from '@material-ui/icons'

const ResultsView = ({onStart}) => (
    <Card>
        <CardContent>
            <Typography variant='headline' gutterBottom>Omat ehdokkaat</Typography>
            <Typography gutterBottom>Nämä ehdokkaat sopivat sinulle parhaiten</Typography>

            <Button
                children='Näytä kaikki'
            />
        </CardContent>
    </Card>
)

export default ResultsView
