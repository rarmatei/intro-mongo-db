const mongoose = require("mongoose");
const connect = require("./exercises/connect");

global.newId = () => {
  return mongoose.Types.ObjectId();
};

beforeAll(async () => {
  await connect("test");
});
afterEach(async () => {
  let promises = [];
  for (let i in mongoose.connection.collections) {
    promises.push(mongoose.connection.collections[i].remove());
  }
  await Promise.all(promises);
});
afterAll(async () => {
  await mongoose.disconnect();
});
