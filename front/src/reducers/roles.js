const initialState = {
    currentRole: null,
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

        default:
            return state
    }
}
