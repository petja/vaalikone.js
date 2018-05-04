import store from '../store'

export const TOGGLE_AUTH_DIALOG = status => ({
    //
})

export const SET_ROLE = roleIndex => async dispatch => {
    await dispatch({
        type: 'SET_ROLE',
        roleIndex,
    })

    setTimeout(() => dispatch(TOGGLE_AUTH_DIALOG(false)), 500)
}
