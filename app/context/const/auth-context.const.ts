import { z } from "zod";

export const emailSchema = z.string().email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters");
