# tellTales

Link - [tell-tales.herokuapp.com](http://tell-tales.herokuapp.com/)

Reedy is a minimalistic RSS feed reader inspired by [Feedly](https://feedly.com/).
tellTales is an RSS feed reader inspired by [Feedly](https://feedly.com/).

This web app uses Ruby on Rails, React, Redux, and Javascript.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501274130/Screen_Shot_2017-07-28_at_1.34.20_PM_mucsz0.png" width="800px">

## Features & Implementation
### Home page:
<img src="http://res.cloudinary.com/llventioll/image/upload/v1501274278/Screen_Shot_2017-07-28_at_1.37.16_PM_coxrfz.png" width="800px">

The entire app uses a minimalistic interface consisting of a side navigation bar, a top navigation bar, and the main content. The main features of the app are **Hello World**, **Collections**, and **Feeds**

### Hello World

The Hello World page has a search bar that filters feeds in real time.
The search is handled in the frontend using javascript that matches to the category and name of the source.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501275695/live_search_s50f6z.gif" width="800px">

```javascript
# frontend/source/source_result.jsx
const filteredSources = iframeSources.filter(
      source =>
        source.category
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        this.state.search
          .toLowerCase()
          .includes(source.category.toLowerCase()) ||
        source.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        this.state.search.toLowerCase().includes(source.name.toLowerCase())
    );
```

### Articles

Articles can be opened up in a modal window while preserving the original article's source.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501275117/opening_articles_aatmms.gif" width="800px">


### Collections
Collections can be created, deleted, and edited to organize the feed sources into the user's preferred categories
<img src="http://res.cloudinary.com/llventioll/image/upload/v1501275330/creating_deleting_collections_mj3bsd.gif" width="800px">

Feed source can be saved in collection by hovering over the button and then clicking the collection the user wants to add the source to.

The source can also be delete from a collection in the navigation bar

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501276622/add_source_hbg2da.gif" width="800">

## Development Design
* [Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md

## Additional Features

In the future I would like to revisit this app and add fuzzy searching for articles.

I would also like to add Boards for users who want to save articles and organize them according to certain categories.