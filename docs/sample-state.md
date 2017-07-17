# Sample State

```js
{
  user: {
    id: 1,
    username: 'rickyspanish'
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },

  feeds: {
    1: {
      id: 1,
      title: 'Forbes',
      category: 'Business'
    }
  },

  collections: {
    1: {
      id: 1,
      title: 'Finance',
      feedIds: [1, 2]
    }
  }

  articles: {
    1: {
      id: 1,
      title: 'Federer Wins 19th Slam',
      body: 'Federer sweeps oppositions to win the Wimbledon without dropping a set',
      date: 'Mon, 17 July 2017 09:09:09 GMT',
    }
  }
}
```
