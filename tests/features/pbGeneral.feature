Feature: Pickleball Homepage

Scenario: Navigating to pickleball.com
Given user navigates to pickleball homepage
Then user is in pickelball homepage

Scenario: Navigate to news page 
Given user navigates to pickleball homepage
When user clicks the news tab
Then user should be in the news page
