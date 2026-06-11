export const errorHandler = (err, req, res, next) => {
  console.error("error is : ", err.message);
  res.json({
    msg: err.message || "Internal error",
  });
};