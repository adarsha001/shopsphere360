const errorMiddleware = (err, req, res, next) => {
    // Extract status, message, and extra details from the error object
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetails = err.extraDetails || "No additional details error from backend";
  
    // Send the error response with appropriate status code and message
    return res.status(status).json({ message, extraDetails, });

  };
  
  module.exports = errorMiddleware;
  