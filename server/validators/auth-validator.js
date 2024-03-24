const { z } = require("zod");

const signupSchema = z.object({

    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 char" })
    .max(255, { message: "Name must not be at more than 255 char" }),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 char" })
    .max(255, { message: "Email must not be at more than 255 char" }),

    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 digit" })
    .max(20, { message: "Phone must not be at more than 20 digit" }),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 char" })
    .max(255, { message: "Password must not be at more than 255 char" }),

});

module.exports = signupSchema;