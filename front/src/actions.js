export function setQuestionAnswer(questionId, answerId) {
    return {
        type                : 'SET_QUESTION_ANSWER',
        questionId,
        answerId,
    }
}

export function questionsReceived(questions, options) {
    return {
        type                : 'RECEIVED_QUESTIONS_RESPONSE',
        questions,
        options,
    }
}

export function getNextQuestion() {
    return {
        type                : 'NEXT_QUESTION',
    }
}
