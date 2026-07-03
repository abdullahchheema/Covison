import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Please enter your company name'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
})

export type ContactFormData = z.infer<typeof contactSchema>
