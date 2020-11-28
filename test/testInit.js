const mongoose = require("mongoose");

class TestInit {
  async tearDown() {
    if (mongoose.connection.db.databaseName === "test_db") {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  }
}

module.exports = new TestInit();
