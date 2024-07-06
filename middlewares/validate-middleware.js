const validate = (schema) => async (req, res, next) => {
    try {
      // Parse and validate the request body using the schema
      const parsedBody = await schema.parseAsync(req.body);
      req.body = parsedBody;
      next();
    } catch (err) {
      // If validation fails, create a structured error object
      const status = 422;
      const message = "Validation failed";
      const extraDetails = err.errors ? err.errors[0].message : "Invalid data";
  
      const error = {
        status,
        message,
        extraDetails,
      };
  
      // Forward the error to the error handling middleware
      next(error);console.log(error);
    }
  };
  
  module.exports = validate;
  