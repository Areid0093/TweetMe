import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetComponent, TweetDetailComponent, FeedComponent} from './tweets'
import {ProfileBadgeCompontent} from './profiles'
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root')
if (appEl){
  ReactDOM.render(<App />, appEl);
}

const e = React.createElement
const tweetsEl = document.getElementById('tweetme')
if (tweetsEl) {
  ReactDOM.render(
    e(TweetComponent, tweetsEl.dataset), tweetsEl);
}

const tweetFeedEl = document.getElementById('tweetme-feed')
if (tweetFeedEl) {
  ReactDOM.render(
    e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailEl = document.querySelectorAll('.tweetme-detail')

tweetDetailEl.forEach(container => {
    ReactDOM.render(
      e(TweetDetailComponent, container.dataset), container)
})

const profileBadgeEl = document.querySelectorAll('.tweetme-profile-badge')

profileBadgeEl.forEach(container => {
    ReactDOM.render(
      e(ProfileBadgeCompontent, container.dataset), container)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
