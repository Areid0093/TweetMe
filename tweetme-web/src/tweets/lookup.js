import {backendlookup} from '../lookup'

export function apiTweetCreate(newTweet, callback) {
    backendlookup('POST', '/tweets/create/', callback, {content: newTweet})
}

export function apiTweetAction(tweetId, action, callback) {
    const data = {id: tweetId, action: action}
    backendlookup('POST', '/tweets/action/', callback, data)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint = '/tweets/'
    if (username) {
        endpoint = `/tweets/?username=${username}`
    }
    if (nextUrl !== null & nextUrl !== undefined) {
        endpoint = nextUrl.replace('http://localhost:8000/api', '')
    }
    backendlookup('GET', endpoint, callback)
}

export function apiTweetDetail(tweetId, callback) {
    backendlookup('GET', `/tweets/${tweetId}/`, callback)
}