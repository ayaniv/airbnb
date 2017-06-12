## Airbnb Listings
###### Yaniv Aharon

How to install?

```
1. npm install
2. npm run dev
3. open browser and navigate to: localhost:3000/
```
to get csv file please run:
```
1. npm run twitter
```

## What's inside?
1. Node.js bot that exports tweets from the last 24 hours mentioning airbnb to a csv.
2. Angular 1.5 app that allows user to select a city. When making a choice, it should show a list of listings in that city (picture, title, address).
When clicking on a listing it should redirect to a page / open a modal with the listing (picture, title, address again) and that listing's reviews.

in order to make it work.
please make sure to have a `.env` file under the root directory, having the following:
```
TWITTER_CONSUMER_KEY = ...

TWITTER_CONSUMER_SECRET = ...

TWITTER_BEARER_TOKEN = ...
```
