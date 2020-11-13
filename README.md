# Hiring Test - Venturus - Frontend

This is a frontend aplication to the frontend developer job in the company Venturus

## - Specifications and technologies used here

This project was built using `React` with `Typescript`.

Here, `node` version is `12.16.3` and the package manager used is `yarn` in version `1.22.5`. To run the project they have to be downloaded. [Yarn](https://classic.yarnpkg.com/lang/en/) and I recommend installing Node via [NVM](https://github.com/nvm-sh/nvm). All instructions are in the links to install them.

In tests, it's used `Jest`, `React testing library` and `Coverage` reports to help.

## - How to run the project

After downloading the code from the repository, run `yarn` to install all the dependencies.

After that:
```
yarn start
```

Enjoy the application!

## The application

It's a Soccer/Futebol squad manager (looks like a little `Cartola` from Brazil) and you can create teams with lots of descriptions and 10 different field formations. You can choose any player in the world saying its original team and country. These information are real and is acquired from the demo API [https://www.api-football.com/](https://www.api-football.com/).

Descriptions of the tasks in this project can be seen here in this [board](https://trello.com/invite/b/9kzEclDG/e18b42f36ab9cbf4bab60431d74da372/teste-venturus-frontend-e-backend).

## - How to run tests

To run tests:
```
yarn test
```

To run coverage report:
```
yarn test --coverage --watchAll false
```

Enjoy!
