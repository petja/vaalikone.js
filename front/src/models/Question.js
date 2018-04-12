//import jsonFetch from 'json-fetch'

import { questionsReceived } from '../actions'
import store from '../store'

export async function getAll() {
    const questions = await fetch('/api/questions').then(resp => resp.json())
    const options = await fetch('/api/options').then(resp => resp.json())

    store.dispatch(questionsReceived(questions, options))
}
