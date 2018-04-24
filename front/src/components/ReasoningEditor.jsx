import React from 'react'

import TextField from 'material-ui/TextField'

const MAX_LENGTH = 280

const ReasoningEditor = ({questionId, text, onChange}) => (
    <TextField
        label='Perustele vastauksesi'
        multiline
        fullWidth
        value={text}
        helperText={text.length + '/' + MAX_LENGTH}
        onChange={e => onChange(questionId, e.target.value)}
        error={text.length > MAX_LENGTH}
    />
)

export default ReasoningEditor
