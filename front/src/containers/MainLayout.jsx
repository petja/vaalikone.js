import {connect} from 'react-redux'
import {FETCH_ELECTION_INFO, FETCH_OPTIONS} from '../actions'
import MainLayout from '../components/MainLayout.jsx'

const mapStateToProps = (state, ownProps) => ({
    //
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchElectionInfo   : (election, constituency) => dispatch(FETCH_ELECTION_INFO(election, constituency)),
    fetchOptions        : () => dispatch(FETCH_OPTIONS()),
})

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout)

export default container
