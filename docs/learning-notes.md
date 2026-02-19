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
