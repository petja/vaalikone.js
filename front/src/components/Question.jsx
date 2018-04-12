import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Radio from 'material-ui/Radio'

const Question = ({id, text, currentAnswer, onAnswer}) => (
    <Card>
        <CardContent>
            <Typography variant='headline'>{text}</Typography>
            {console.log({onAnswer})}

            {[-2, -1, 0, 1, 2].map(value => (
                <Radio
                    checked={currentAnswer === value}
                    value={value}
                    key={value}
                    onChange={() => onAnswer(id, value)}
                />
            ))}
        </CardContent>
    </Card>
)

export default Question
