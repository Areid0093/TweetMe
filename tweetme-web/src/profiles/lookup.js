import {backendlookup} from '../lookup'

export function apiProfileDetail(username, callback) {
    backendlookup('GET', `/profiles/${username}/`, callback)
}