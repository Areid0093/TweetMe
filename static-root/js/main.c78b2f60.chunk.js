(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(14),a(7)),l=a.n(s),i=(a(15),a(2)),u=a(1),m=a(8);function d(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),s&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",s)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&(window.location.href="/login?showLoginRequired=true"));a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},r.send(c)}function f(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",s=a.display?a.display:"Action",l=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},i="like"===a.type?"".concat(r," ").concat(s):s;return c.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,a){d("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,l)}},i)}function w(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(p,{hideActions:!0,className:" ",tweet:t.parent}))):null}function p(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,o=Object(n.useState)(e.tweet?e.tweet:null),s=Object(u.a)(o,2),l=s[0],i=s[1],d=window.location.pathname.match(Object(m.a)(/([0-9]+)/,{tweetid:1})),p=d?d.groups.tweetid:-1,b="".concat(t.id)==="".concat(p),v=function(e,t){200===t?i(e):201===t&&a&&a(e)},E=e.className?e.className:"col-10 mx-auto col-md-6";return c.a.createElement("div",{className:E},c.a.createElement("div",null,c.a.createElement("p",null," ",t.id," - ",t.content," "),c.a.createElement(w,{tweet:t})),c.a.createElement("div",{className:"btn btn-group"},l&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{tweet:l,didPerformAction:v,action:{type:"like",display:"Likes"}}),c.a.createElement(f,{tweet:l,didPerformAction:v,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(f,{tweet:l,didPerformAction:v,action:{type:"retweet",display:"Retweet"}})),!0===b?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function b(e){var t=c.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):(console.log(e),alert("There was an error, please try again."))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;d("POST","/tweets/create/",n,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function v(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),m=l[0],f=l[1],w=Object(n.useState)(!1),b=Object(u.a)(w,2),v=b[0],E=b[1];Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(n.useEffect)((function(){if(!1===v){!function(e,t){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),d("GET",a,t)}(e.username,(function(e,t){200===t?(o(e),E(!0)):alert("There was an error")}))}}),[r,v,E,e.username]);var h=function(e){var t=Object(i.a)(r);t.unshift(e),o(t);var a=Object(i.a)(m);a.unshift(m),f(a)};return m.map((function(e,t){return c.a.createElement(p,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function E(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],s="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===s&&c.a.createElement(b,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),c.a.createElement(v,Object.assign({newTweets:r},e)))}function h(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(u.a)(a,2),o=r[0],s=r[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),m=i[0],f=i[1],w=function(e,t){200===t?f(e):alert("There was an error finding the tweet.")};return Object(n.useEffect)((function(){!1===o&&(!function(e,t){d("GET","/tweets/".concat(e,"/"),t)}(t,w),s(!0))}),[o,s,t]),null===m?null:c.a.createElement(p,{tweet:m,className:e.className})}var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(E,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");j&&o.a.render(c.a.createElement(g,null),j);var N=c.a.createElement,y=document.getElementById("tweetme");y&&o.a.render(N(E,y.dataset),y),document.querySelectorAll(".tweetme-detail").forEach((function(e){o.a.render(N(h,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c78b2f60.chunk.js.map