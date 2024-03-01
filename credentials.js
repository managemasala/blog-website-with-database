if (process.env.NODE_ENV === "development") {
  module.exports = {
    port: 3000,
    mongodbURL: "mongodb://localhost:27017/blogDB",
  };
} else if (process.env.NODE_ENV === "production") {
  module.exports = {
    port: process.env.PORT,
    mongodbURL: process.env.MONGODB_URL,
  };
}
