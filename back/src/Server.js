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

import { GetAnswers as GetCandidateAnswers } from './controllers/CandidateController'

import * as QuestionController from './controllers/QuestionController'
import * as CandidateController from './controllers/CandidateController'
import * as UserController from './controllers/UserController'

const app = express()

app.use(require('body-parser').json())

// Authorization middlewares
const JWT_SECRET = 'VAALIKONE_NOT_FOR_PRODUCTION'

const adminMiddleware = jwt({
    secret: JWT_SECRET,
    aud: 'admin',
})

const JWTMiddleware = jwt({
    secret: JWT_SECRET,
})

// GET API
app.get('/api/options', GetOptions)
app.get('/api/election/:election', GetElection)
app.get('/api/parties', CandidateController.GetParties)

app.get(
    '/api/constituency/:constituency/questions',
    QuestionController.GetByConstituency
)

app.get(
    '/api/constituency/:constituency/questions/:question/answers',
    QuestionController.GetAnswers
)

app.get(
    '/api/constituency/:constituency/candidates',
    CandidateController.GetByConstituency
)

//app.get('/api/candidates/:candidate', CandidateController.GetById)

// POST API
app.post('/api/results', GetResults)
app.post('/api/login', Login)

app.put('/api/questions', QuestionController.Create)

// Authorized endpoints
app.get('/api/answers', JWTMiddleware, GetCandidateAnswers)
app.get('/api/roles', JWTMiddleware, UserController.GetRoles)

app.get(
    '/api/candidates/:candidate/answer/:questionId',
    JWTMiddleware,
    CandidateController.CheckTokenPermission,
    GetAnswer
)
app.post(
    '/api/candidates/:candidate/answer/:questionId',
    JWTMiddleware,
    CandidateController.CheckTokenPermission,
    SetAnswer
)

app.all('/api/*', (req, res) => res.status(404).end('Not found'))

// Static
app.use(express.static(path.join(__dirname, '../../front/dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front/dist/index.html'))
})

// Start Express server!
app.listen(5001, () => {
    console.log('Server has been started!')
})
