/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        // This test was provided by Udacity
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs defined and the URLs are not empty', function() {
            // URLs should be defined
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBeUndefined(); // url property of allFeeds is defined.
                expect(allFeeds[i].url).not.toEqual(''); // url property of allFeeds is not empty.
            }
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names defined and the URLs are not empty', function() {
            // URLs should be defined
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBeUndefined();
                expect(allFeeds[i].name).not.toEqual('');
            }

        });

    });

    /* This is a test suite named "The menu" */
    /* This suite contains a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    // I got help from this URL. 
    // http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html

    describe('The menu', function() {
        it('should be hidden by default', function() {
            // menu list should have class slide-menu??
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

    /* Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    describe('The menu', function() {
        it("is visible when menu icon is clicked, and closes when the menu icon is clicked again.", function() {
            var spyEvent = spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').trigger("click");
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body')).not.toHaveClass('menu-hidden'); // does the menu display when menu icon is clicked.
            // Trigger a click event on the menu icon.
            $('.menu-icon-link').trigger("click");
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body')).toHaveClass('menu-hidden'); // does the menu display when menu icon is clicked.
        });
    });


    /* This is a new test suite named "Initial Entries" */

    describe('Initial entries', function() {
        // write a test that ensures the loadFeed function is called.

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('- there is at least one .entry element in the .feed container', function() {
            expect($('.entry')[0]).toBeDefined();
        });
    });

    // This is a new test suite named "New Feed Selection"
    describe('New feed selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feedContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                console.log($('.feed').html());
                feedContent = $('.feed').html();
                done();
            });
        });
        it('- when a new feed is loaded, content actually changes', function(done) {
            loadFeed(1, function() {
                console.log($('.feed').html());
                expect(feedContent).not.toEqual($('.feed').html());
                done();
            });

        });
    });


}());
