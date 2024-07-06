const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "name is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: " email must be at least 3 charectar" })
    .max(255, { message: " email must not be over 255 characters" }),
  password: z
    .string({ required_error: "name is required" })
    .trim()
    .min(7, { message: " password must be at least 7 charectar" })
    .max(255, { message: " password must not be over 255 characters" }),
});

const signupSchema =loginSchema.extend({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 charactar" })
    .max(255, { message: "name must not be over 255 characters" }),


  phone: z
    .string({ required_error: "name is required" })
    .trim()
    .min(10, { message: "phone must be at least 10 charectar" })
    .max(20, { message: "phone must not be over 20 characters" }),

});

module.exports = {signupSchema,loginSchema};
