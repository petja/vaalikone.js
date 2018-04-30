import store from '../store'

export const get = () => {
    const state = store.getState()
    const {auth} = state.root

    if (auth && auth.expires > Date.now()) {
        return auth.token
    }

    return null
}
