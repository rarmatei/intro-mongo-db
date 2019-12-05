### Setting up

- download postman
- Install Atlas DB
- Get your connection url
- Make sure you use a stupid password for the user, and not your real one
- Add it to connection.js
- run `npm install`

TODO: invert the two branches: master needs to be start, and solution needs to be master
TODO: fix solution in app/todo.js - todoId, remove lean()

finish above instructions

### Models

- location - `exercises/models`
- commands
  - test - `npm test exercises/models/__test__/`

This exercise will have you create connection logic and mongoose schemas. Using the schema, you must create some CRUD functionality.

- [ ] finish the user schema so that the the user model tests pass
- [ ] complete the crud functions with the user model and get all the crud test to pass

### Queries

- location - `exercises/queries`
- commands
  - test - `npm run test exercises/queries/__test__/`

This exercise will have you add relationships between models. You'll then use those models to create slightly more advanced queries than the last exercise

- [ ] the post model should have have a one-to-one author field that points to the author collection
- [ ] the post model should have a one-to-many similarPost field that points to posts
- [ ] get all the post model tests to pass
- [ ] get all the query tests to pass

### App

- location - `exercises/app`
- commands
  - start the server - `npm start`

In this exercise, you'll have to create queries in ExpressJS controllers to satisfy the request. You'll learn how to use mongodb in an API environment.

- [ ] start the server
- [ ] open up POSTMAN
- [ ] create db query for `GET /todo/:id`
- [ ] create db query for `GET /todo`
- [ ] create db mutation for `POST /todo/`
