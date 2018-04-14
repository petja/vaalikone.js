import React from 'react'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table'
import { withStyles } from 'material-ui/styles'

import CandidateRow from '../components/CandidateRow.jsx'

function CandidateList({candidates, parties, scoreboard}) {
    // Mapping
    const candidateList = Object.keys(candidates || {}).map(candidateId => {
        const candidate = candidates[candidateId]
        const party = candidate.party ? parties[candidate.party] : null
        const score = scoreboard[candidateId]

        return (
            <CandidateRow
                key={candidateId}
                candidate={candidate}
                score={score}
                party={party}
            />
        )
    })

    const table = (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Sopivuus</TableCell>
                    <TableCell>Ehdokas</TableCell>
                    <TableCell>Ehdokkaan numero</TableCell>
                    <TableCell>Puolue</TableCell>
                </TableRow>
            </TableHead>
            <TableBody children={candidateList} />
        </Table>
    )

    return (
        <Card>
            <CardContent children={table} />
        </Card>
    )
}

export default CandidateList
