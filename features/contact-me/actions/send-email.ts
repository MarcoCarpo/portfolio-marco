import { z } from "zod";
import formSchema from "../components/ContactMeForm/contactMeForm.schema";

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
	console.log(values)
}