# Component Hierarchy

#### HomePage
  - HomePageHeader

#### SignInContainer
  - UserForm

#### SignUpContainer
  - UserForm

#### MainPage
  - SideNav
  - MainNav
  - AllFeedsContainer  

#### SideNav
  - NavLinks
  - CollectionListContainer

#### CollectionListContainer
  - CollectionList
    - Collection
      - CollectionItem

#### DiscoverContainer
  - DiscoverHeader
  - DiscoverCategory

#### AllFeedsContainer
  - FeedListContainer

#### FeedListContainer
  - FeedList
    - FeedItem
      - ButtonListContainer

#### ButtonListContainer
  - ButtonList
    - Button

#### ArticleReaderContainer
  - ArticleReader
    - ArticleNav
    - ButtonListContainer
    - ArticleContent

#### AddContentContainer
  - SearchBar
  - SearchResultListContainer
    - SearchResultList
    - SearchResultItem


## Routes

|Path   | Component   |
|-------|-------------|
| / | HomePage (logged out) |
| /signup | SignInContainer |
| /signin | SignUpContainer |
| /feeds | MainPage (logged in) |
| /feeds/:feedId | FeedListContainer |
| /discover | DiscoverContainer |
