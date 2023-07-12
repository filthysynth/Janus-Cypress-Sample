## Cypress for Amazon Sample Tests ##

The following repo is a very basic example of how I would begin to use Cypress for UI testing on the Amazon site.  

## Dependencies ##
- Node Modules and NPM (though you can use Yarn instead if preferred)
- Cypress (you can install using `npm install cypress --save-dev` )

## Setup ##
1.  Clone the repo using `git clone`
2.  Run `npx cypress open` from the root of the repo
3.  Click on e2e and select the file you'd like to run from the UI
4.  You can also run tests headlessly using `npx cypress run`

## Notes ##
If I had more time:
- I would have better split up the Home Page into a separate search results page object
- When I worked at Wayfair, we wrote up a very complex logic for assuring that a Product (sku) was in stock.  Because we had countless variations of products with different features, messaging, and variations on each page, we had to specify which product we wanted to test on in the test file and the logic in the page object went through several checks and conditionals to make sure we had the right one.  We never would have done something as short-lived as what I have done here with hardcoded ASIN and descriptors, it would have to be dynamic for long run sustainability. 
- I would have installed cypress-axe to begin writing accessibility tests as that is a personal passion of mine.
- If there had been more tests, I would have divided up the tests differently by smoke vs regression.  The smoke suite would have a strict policy during code review that if you were to add to it, you'd have to take something out in order to keep it as lightweight as possible.
- I'd include a .yaml file for github actions as well as a docker image hosted in an artifactory to tap into and run the tests.  Smoke would be at a regular cadence while Regression would run less often on the respective environment.

Thank you for your time!