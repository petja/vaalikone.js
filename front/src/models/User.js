import localForage from './db'

export const getToken = async () => {
    return await localForage.getItem('auth_token')
}
