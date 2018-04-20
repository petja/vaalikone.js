import React from 'react'

import Reasoning from '../components/Reasoning.jsx'

import Typography from 'material-ui/Typography'
import List from 'material-ui/List'

class ReasoningList extends React.Component {
    state = {
        answers             : [],
    }

    render() {
        const {answers} = this.state

        const title = (
            <Typography color='secondary' variant='subheading'>
                Perusteluita puolesta ja vastaan
            </Typography>
        )

        const answerList = (
            <List>
                {answers.map(answer => (
                    <Reasoning
                        key={answer.candidate}
                        candidate={{id: answer.candidate, name: 'Petja Touru'}}
                        optionId={answer.option}
                        reasoning={answer.reasoning}
                        optionName={answer.option}
                    />
                ))}
            </List>
        )

        return (
            <React.Fragment>
                {title}
                {answerList}
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.fetchItems()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.questionId !== this.props.questionId) this.fetchItems()
    }

    async fetchItems() {
        const {questionId} = this.props
        const apiResponse = await fetch(`/api/question/${questionId}/answers`)

        this.setState({
            answers             : await apiResponse.json(),
        })
    }
}

export default ReasoningList
