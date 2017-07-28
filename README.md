# tellTales

Link - [tell-tales.herokuapp.com](http://tell-tales.herokuapp.com/)

tellTales is an RSS feed reader inspired by [Feedly](https://feedly.com/).

This web app uses Ruby on Rails, React, Redux, and Javascript.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501274130/Screen_Shot_2017-07-28_at_1.34.20_PM_mucsz0.png" width="800px">

## Features & Implementation
### Home page:
<img src="http://res.cloudinary.com/llventioll/image/upload/v1501274278/Screen_Shot_2017-07-28_at_1.37.16_PM_coxrfz.png" width="800px">

The app uses a minimalistic design approach consisting of a side navigation bar and the main content. The main features of the app are **Hello World**, **Collections**, and **Articles**

### Hello World

The Hello World page has a search bar that filters feeds in real time.
The search is handled in the frontend using javascript that matches to the category and name of the source.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501275695/live_search_s50f6z.gif" width="800px">

### Collections
Collections can be created, deleted, and edited to organize the feed sources into the user's preferred categories.

Feed source can be saved in collection by hovering over the button and then clicking the collection the user wants to add the source to. The sources can also be delete from a collection in the navigation bar.

The icons next to each source took a bit of work as demonstrated by the code below. The images for the original api was deprecated so the url had to be extracted in the correct format using regular expressions and passed on to another another API call.

```javascript
# frontend/components/collection_source/collection_source_item.jsx
 const matchSource = sources.filter(source => source.id === sourceId);
    let url = matchSource[0] ? matchSource[0].url : "";
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com";
    }

    let name = matchSource[0] ? matchSource[0].name : "";

    if (imageUrl !== "") {
      
    }
    return (
      <div className="collection-source-options">
        <button className="fa-delete-source" onClick={this.handleDelete}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <Link to={`/feed/source/${this.props.sourceId}`}>
          <img
            src={`http://logo.clearbit.com/${imageUrl}?size=202`}
            className="source-icon-image"
          />
          <p>{name}</p>
        </Link>
      </div>
    );
```

### Articles

Articles can be opened up in a modal window while preserving the original article's source.

<img src="http://res.cloudinary.com/llventioll/image/upload/v1501275117/opening_articles_aatmms.gif" width="800px">


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

## In the Future

In the future I would like to revisit the News API I was using and replace it with a more detailed one.

Depending on the API I would be using the search functionality would need to be moved from the front end to the back end.  

An Additional feature I want to add is to have a page showing the top headlines from the difference sources.