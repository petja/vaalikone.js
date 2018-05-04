import store from '../store'

export const TOGGLE_AUTH_DIALOG = status => ({
    type: 'TOGGLE_AUTH_DIALOG',
    status,
})

export const SET_ROLE = roleIndex => async dispatch => {
    await dispatch({
        type: 'SET_ROLE',
        roleIndex,
    })

    setTimeout(() => dispatch(TOGGLE_AUTH_DIALOG(false)), 500)
}

export const FETCH_ROLES = () => async dispatch => {
    const state = store.getState()

    const roles = await fetch(`/api/roles`, {
        headers: { Authorization: `Bearer ${state.root.auth.token}` },
    }).then(resp => resp.json())

    await dispatch({
        type: 'FETCH_ROLES',
        roles,
    })
}
