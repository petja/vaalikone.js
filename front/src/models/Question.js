//import jsonFetch from 'json-fetch'

import { questionsReceived } from '../actions'
import store from '../store'

export function getAll() {
    Promise.all([
        fetch('/api/questions').then(resp => resp.json()),
        fetch('/api/options').then(resp => resp.json()),
        fetch('/api/candidates').then(resp => resp.json()),
        fetch('/api/parties').then(resp => resp.json())
    ]).then(resolved => {
        const questions = resolved[0]
        const options = resolved[1]
        const candidates = resolved[2]
        const parties = resolved[3]

        store.dispatch(questionsReceived(questions, options, candidates, parties))
    })
}
