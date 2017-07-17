# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique, case-insensitive
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
title       | string    | not null
category    | string    | not null

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (feeds), indexed
title       | string    | not null
body        | string    | not null
date        | date      | not null
site_url    | string    | not null

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign_key, indexed
title       | string    | not null

## collection_feeds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
collection_id   | integer   | not null, foreign_key (collections), indexed, unique [feed_id]
feed_id         | integer   | not null, foreign_key (feeds), indexed, unique [collection_id]
