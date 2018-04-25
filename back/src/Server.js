import path from 'path'
import express from 'express'

import jwt from 'express-jwt'

import {
    GetOptions,
    GetQuestions,
    GetCandidates,
    GetParties,
    GetResults,
    Login,
    GetAnswer,
    GetAnswers as GetQuestionAnswers,
    SetAnswer,
    GetElection,
} from './controllers/API.Controller'

import {
    GetAnswers as GetCandidateAnswers,
} from './controllers/CandidateController'

console.log(GetCandidateAnswers)

const app = express()

app.use(require('body-parser').json())

// Authorization middlewares
const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

const adminMiddleware = jwt({
    secret                  : JWT_SECRET,
    aud                     : 'admin',
})

const candidateMiddleware = jwt({
    secret                  : JWT_SECRET,
    aud                     : 'candidate',
})

// GET API
//app.get('/api/:election/constituencies', GetConstituencies)
app.get('/api/options', GetOptions)
app.get('/api/election/:election', GetElection)
app.get('/api/:election/questions', GetQuestions)
app.get('/api/question/:question/answers', GetQuestionAnswers)
app.get('/api/:election/candidates', GetCandidates)
app.get('/api/parties', GetParties)

// POST API
app.post('/api/results', GetResults)
app.post('/api/login', Login)

// Authorized endpoints
app.get('/api/answers', candidateMiddleware, GetCandidateAnswers)
app.get('/api/answer/:questionId', candidateMiddleware, GetAnswer)
app.post('/api/answer/:questionId', candidateMiddleware, SetAnswer)

app.all('/api/*', (req, res) => res.status(404))


// Static
app.use(express.static(path.join(__dirname, '../../front/dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front/dist/index.html'))
})

// Start Express server!
app.listen(5001, () => {
    console.log('Server has been started!')
})
