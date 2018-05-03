import store from '../store'

export const TOGGLE_AUTH_DIALOG = roleIndex => ({
    type: 'TOGGLE_AUTH_DIALOG',
})

export const SET_ROLE = roleIndex => ({
    type: 'SET_ROLE',
    roleIndex,
})

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
