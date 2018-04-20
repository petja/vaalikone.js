import {connect} from 'react-redux'
import {LOGIN} from '../actions'
import ReasoningList from '../components/ReasoningList.jsx'

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    answers             : [],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin             : (email, password) => dispatch(LOGIN(email, password)),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReasoningList)

export default container
