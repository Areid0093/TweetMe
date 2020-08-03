import React, {useState, useEffect} from 'react'
import {Tweet} from './detail'
import {TweetCreate} from './create'
import {TweetsList} from './list'
import {apiTweetDetail} from './lookup'
import {FeedList} from './feed'

export function TweetComponent(props) {
  const [newTweets, setNewTweets] = useState([])
  const canTweet = props.canTweet === 'false' ? false : true
  const handleNewTweet = (newTweet) => {
    // backend api response handler
    let tempNewTweets = [...newTweets]
    tempNewTweets.unshift(newTweet)
    setNewTweets(tempNewTweets)
  }
  return <div className={props.className}>
          {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
        <TweetsList newTweets={newTweets} {...props} />
    </div>
}

export function FeedComponent(props) {
  const [newTweets, setNewTweets] = useState([])
  const canTweet = props.canTweet === 'false' ? false : true
  const handleNewTweet = (newTweet) => {
    // backend api response handler
    let tempNewTweets = [...newTweets]
    tempNewTweets.unshift(newTweet)
    setNewTweets(tempNewTweets)
  }
  return <div className={props.className}>
          {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
        <FeedList newTweets={newTweets} {...props} />
    </div>
}

export function TweetDetailComponent(props) {
  const {tweetId} = props
  const [didLookup, setDidLookup] = useState(false)
  const [tweet, setTweet] = useState(null)
  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setTweet(response)
    } else {
      alert('There was an error finding the tweet.')
    }
  }
  useEffect(() => {
    if (didLookup === false) {
      apiTweetDetail(tweetId, handleBackendLookup)
      setDidLookup(true)
    }
  }, [didLookup, setDidLookup, tweetId])

  return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}