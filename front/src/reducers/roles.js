const initialState = {
    currentRole: null,
    dialogOpen: false,
    fetched: false,
    list: [],
}

export default (state = initialState, action) => {
    const output = { ...state }

    switch (action.type) {
        case 'FETCH_ROLES':
            return {
                ...state,
                fetched: true,
                list: action.roles,
            }

            break

        case 'SET_ROLE':
            return {
                ...state,
                currentRole: action.roleIndex,
            }

            break

        case 'TOGGLE_AUTH_DIALOG':
            return {
                ...state,
                dialogOpen: !state.dialogOpen,
            }

            break

        case 'LOGOUT':
            return { ...initialState }

            break

        default:
            return state
    }
}
