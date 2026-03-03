Feature: Pickleball Homepage

Scenario: Navigating to pickleball.com
Given user navigates to pickleball homepage
Then user is in pickelball homepage

Scenario: Navigate to news page 
Given user navigates to pickleball homepage
When user clicks the news tab
Then user is in the news page

Scenario Outline: Filter news by subcategory
Given user is in the news page
When I click on "<newsCategory>" tab
Then the URL should contain "<newsCategory>"

Examples:
| newsCategory  |
| International |
| Press         |
