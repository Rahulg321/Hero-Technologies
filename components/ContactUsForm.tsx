"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  contactNumber: z
    .string({
      required_error: "Contact Number is required",
    })
    .trim() // Remove leading/trailing whitespace
    .refine(
      (value) => /^\d+(?:[-\+]?\d)*$/.test(value),
      "Invalid phone number format"
    ),
  company: z
    .string({
      required_error: "please enter your company name",
    })
    .trim()
    .min(2, "Company name must be at least 2 characters"),
  howCanWeHelp: z
    .string({
      required_error: "please enter how can we help you",
    })
    .trim()
    .min(10, "Please provide more details about your request"),
});

const ContactUsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Enter your name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ContactNumber</FormLabel>
              <FormControl>
                <Input placeholder="+(213) 312 3123" {...field} type="number" />
              </FormControl>
              <FormDescription>Enter your mobile number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormDescription>
                Enter your verified Email Address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your company name</FormLabel>
              <FormControl>
                <Input placeholder="CMG Companies" {...field} />
              </FormControl>
              <FormDescription>
                The name of the company which you belong to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="howCanWeHelp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a brief description here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>How can we help your business.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
