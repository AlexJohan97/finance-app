import { z } from "zod";
import { categories, types } from "./consts";

export const transactionSchema = z.object({
  type: z.enum([types[0], ...types.slice(1)]),
  category: z.enum([categories[0], ...categories.slice(1)]),
  amount: z.coerce.number().min(1, { message: "Amount must be at least 1" }),
  description: z.string().min(1, { message: "Description is required" }),
  create_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
});
