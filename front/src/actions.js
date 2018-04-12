export function setQuestionAnswer(questionId, answerId) {
    console.log({questionId, answerId})
    return {
        type                : 'SET_QUESTION_ANSWER',
        questionId,
        answerId,
    }
}
