const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "An internal server error occurred",
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandlerMiddleware;
