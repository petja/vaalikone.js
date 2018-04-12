'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scoreCandidates = exports.getResponsesByQuestion = exports.getScoreboard = undefined;

let getScoreboard = exports.getScoreboard = (() => {
    var _ref = _asyncToGenerator(function* () {
        const candidates = yield _db2.default.select('*').from('candidates');

        /* Create object where key is ID of candidate
         * and value is zero, this way:
         *
         * {
         *   "candidateId": 0
         * }
         */
        return candidates.map(function (candidate) {
            return candidate.id;
        }).reduce(function (acc, cur) {
            acc[cur] = 0;
        }, {});
    });

    return function getScoreboard() {
        return _ref.apply(this, arguments);
    };
})();

// Return object containing questionId as a key and
// array containing candidate responses as a value
let getResponsesByQuestion = exports.getResponsesByQuestion = (() => {
    var _ref2 = _asyncToGenerator(function* () {
        const responses = yield _db2.default.select('options.value AS value', 'candidate_answers.question AS question', 'candidate_answers.candidate').from('candidate_answers').innerJoin('options', 'candidate_answers.option', 'options.id');

        return responses.reduce(function (acc, response) {
            const { candidate, question, value } = response;

            // If question doesn't yet have entry, create it
            if (!acc[question]) acc[question] = [];

            // Inner object
            acc[question].push({
                candidate,
                value
            });

            return acc;
        }, {});
    });

    return function getResponsesByQuestion() {
        return _ref2.apply(this, arguments);
    };
})();

let scoreCandidates = exports.scoreCandidates = (() => {
    var _ref3 = _asyncToGenerator(function* (userResponses) {
        const questionResponses = yield getResponsesByQuestion();

        // Loop thru every question user has responsed to ...
        return Object.keys(userResponses).map(function (questionId) {

            const userResponse = userResponses[questionId];

            // If user is trying to give answer to question which
            // doesn't exists, handle this case properly
            if (!questionResponses[questionId]) return {};

            // Calculate difference between user and candidate response
            // and put the result to the object representing difference
            // between all candidates and the user
            return questionResponses[questionId].reduce(function (acc, candidateResponse) {
                const diff = compareAnswers(candidateResponse.value, userResponse);

                acc[candidateResponse.candidate] = diff;

                return acc;
            }, {});
        }).reduce(function (acc, questionDiff) {

            // Sum all response differences grouped by candidate
            Object.keys(questionDiff).forEach(function (candidateId) {

                // If candidate doesn't yet have entry, create it
                if (!acc[candidateId]) acc[candidateId] = 0;

                acc[candidateId] += questionDiff[candidateId];
            });

            return acc;
        }, {});
    });

    return function scoreCandidates(_x) {
        return _ref3.apply(this, arguments);
    };
})();

exports.compareAnswers = compareAnswers;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function compareAnswers(a, b) {
    return Math.max(a, b) - Math.min(a, b);
}