export const getFeed = () =>
  $.ajax({
    method: "GET",
    url: "https://newsapi.org/v1/sources?"
  });

export const getArticles = source =>
  $.ajax({
    method: "GET",
    url: `https://newsapi.org/v1/articles?source=${source}&apiKey=34116c1af30f4ef1a11b0b59b86c828e`
  });
