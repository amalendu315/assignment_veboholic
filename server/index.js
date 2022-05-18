const app = require("./app");

const mongoose = require("mongoose");

const MongoCloud_URI =
  "mongodb+srv://ammo:Ammo%402001@cluster0.cv40z.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = () => {
    mongoose
      .connect(
       MongoCloud_URI
      )
      .then((con) =>
        console.log(`Database is connected to : ${con.connection.host}`)
      )
      .catch((err) => console.log(err));
}

connectToDB();

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`)
})