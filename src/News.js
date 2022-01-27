import React from 'react';
import './News.css';
import InstaFeeds from './InstaFeeds.js';

export default function News() {

    const token = 'IGQVJYN0lHaVYtWWwzUklOSm5JTjNrUU9wU1pGUGQweDl5bDNrZAkV3ZATU5V0xGWnZAlRFBOOE1PT2tTUU5ST1E0c0xsZAnRUbXhzTmgwUkJ3RG1JcW9tTFZAodm5tTkJxR0lpRGd0Y2JyenBxZA3dpV0VIbgZDZD'
  return <div>

    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds token={token} limit={12}/>
    </>













  </div>;
}
