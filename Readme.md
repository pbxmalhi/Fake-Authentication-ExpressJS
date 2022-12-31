# Express Fake Authentication

In this Project we are making a fake authenticator for our Projects.

## Documentation

We are going to make three files :  
Firstly we have created a index.js file which contains all the Packages and using User-Modules. We have also set-up the function to provide the access to other files only if the user has logged in.

Second file named grocery.js contains the groceryList array which is going to be displayed when user Request with link [Get Grocery](http://localhost:3001/grocery/list) and a route is provided with the POST request on link [POST Grocery](http://localhost:3001/grocery/item) to add items in the grocery List.

Third file named auth.js contains the routes for the Login and we are also creating session on this file too which is being used for providing access of the grocery to the user.

## Requirements

1. Express JS Package.
2. Express-session Package.
3. Cookie-Parser Package.
4. Postman.

## Prerequisite

1. Basic Knowledge of Javascript (ES6 Preferably).
2. Familiarity with installing packages through NPM.
3. Knowledge of NodeJS.

## Index File

```javascript
// Creating a localhost connection.
app.listen(PORT, () => console.log(`Running on PORT : ${PORT}`));

// Route for user login.
app.use("/auth", authRoute);

// Checking weather user logged in if so the next() function will run and we can use other routes.
app.use((req, res, next) => {
  if (req.session.user) next();
  else res.send(401);
});

// Routes for the grocery file to retrieve and add grocery data.
app.use("/grocery", groceryRoute);
```

## Grocery File

```javascript
// Get request to retrieve the items of the groceries.
router.get("/list", (req, res) => {
  res.send(groceryList);
});

// Post request to add the item in the groceryList array.
router.post("/item", (req, res) => {
  groceryList.push(req.body);
  res.send(201);
});

// Exporting this module to use in index.js file
module.exports = router;
```

## Auth File

```javascript
// Post request to login user and creating a session for the user.
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (req.session.user) {
      res.send(req.session.user);
    } else {
      req.session.user = { username };
      res.send(req.session);
    }
  } else {
    res.send(401);
  }
});

// Exporting this module to use in index.js file
module.exports = router;
```
