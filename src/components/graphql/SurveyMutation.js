
import gql from 'graphql-tag';

export const CREATE_SURVEY = gql`
    mutation addAnswer($answer: [inputInsertAnswer]) {
        addAnswer(Answer: $answer) {
            id
            QueryId
            SurveyId
            answerValue
        }
    }
`;
