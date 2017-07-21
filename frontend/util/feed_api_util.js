export const getFeed = () => (
  $.ajax(
    {
      method: 'GET',
      url: 'https://newsapi.org/v1/sources?'
    }
  )
);