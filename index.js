const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// middleware area
// calling cors important
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("exited My First Ever NODE");
});

const users = [
  { id: 0, name: "mim", age: 26 },
  { id: 1, name: "mimm", age: 26 },
  { id: 2, name: "era", age: 26 },
  { id: 3, name: "mimmmm", age: 26 },
  { id: 4, name: "ridoy", age: 26 },
  { id: 5, name: "mimmmmmm", age: 26 },
];

// get method
// search query
// search korle matchng shob pabo
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }

  res.send(users);
});

// post method
// app.method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;

  users.push(newUser);

  console.log("hittng the post ", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api
// dynamicly link chnage hobe
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "anarosh"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yammy yammmy fazli");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
