const app = require("./index");
const connect = require("./configs/db");
const port = process.env.PORT || 3000;

app.listen(port, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err);
  }
});
