import { connect } from 'react-redux'
import { LOGOUT } from '../actions.js'
import { FETCH_ROLES, SET_ROLE } from '../actions/roles.js'
import RoleList from '../components/RoleList.jsx'

const mapStateToProps = (state, ownProps) => ({
    auth: state.root.auth,
    fetched: state.roles.fetched,
    roles: state.roles.list,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchRoles: () => dispatch(FETCH_ROLES()),
    setRole: roleIndex => dispatch(SET_ROLE(roleIndex)),
    logout: () => dispatch(LOGOUT()),
})

const container = connect(mapStateToProps, mapDispatchToProps)(RoleList)

export default container
