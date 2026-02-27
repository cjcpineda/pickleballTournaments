##Setting up a new project
###commands for setup
- npm init -y
- npm install -D typescript ts-node @types/node @cucumber cucumber playwright @playwright/test
- npx playwright install
- (optionally) npx tsc --init / npx cucumber-js --init
- then use npm run test / npx cucumber-js … to execute the specs

###files to create
- hooks.ts
- custom-world.ts

###FAQ
1. What are Hooks?
- Hooks are special functions that run at specific points in your test lifecycle. 
````Before each test:
  → Start a fresh browser
  → Log in with test credentials
  
Run the actual test
  
After each test:
  → Take a screenshot if test failed
  → Close the browser
  → Clear the database````
  
2. What is custom world?
- The "World" is a JavaScript object that holds shared data and helper methods for your tests. It's like a shared notepad that all your test steps can access and update. ie. where we can store user/pass
- CustomWorld is a container that holds all the tools your tests need so you can access them from any test step!
