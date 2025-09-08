import z from "zod";

export const loginSchema = z.object({
    phoneNumber: z.string().min(1, "Phone number is required").regex(/^(09\d{9}|\+989\d{9}|00989\d{9})$/, "Invalid phone number format"),
    password: z.string().min(1, "Password is required"),
})