"use client"

import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(1000),
})

export default formSchema