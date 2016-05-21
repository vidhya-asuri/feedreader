# Project Overview

# Feedreader
Use Jasmine to write test suites for a project that displays a few different RSS feeds.

## How to run
Open index.html from the root directory in a browser.

## RSS feeds
When index.html loads a list of RSS feeds loads and towards the bottom of the page, a list of Jasmine test results is displayed. 

## app.js

This javascript file starts out by loading Google's Feed Reader API.
When the FeedReader API finishes loading, the init function is called.
The init function calls the loadFeed function. The loadFeed function takes two parameters - the index of the allFeeds array and an optional parameter which is the name of the callback function to call.

The loadFeed function makes a 'POST' request to Udacity's service end point that fetches and returns a list of RSS feeds. When the POST request succeeds, the list of RSS feeds fetched by the service is.displayed.

If loadFeed receives the optional callback function name then the callback function is called.

