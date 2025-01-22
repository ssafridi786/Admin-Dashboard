"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Card, CardDescription, CardHeader,CardContent,CardTitle} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const formSchema = z.object({
 name: z.string().min(1, {
    message: "Name is required",
 }),
  email: z.string().min(1, {
    message: "Email is required",
  }).email({
    message: "Invalid email address",
  }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
    confirmPassword: z.string().min(1, {
        message: "Confirm Password is required",
    }).refine(data => data === formSchema.password, {
        message: "Passwords do not match",
    })
})



const RegisterForm = () => {
    
    const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues:{
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
     },
   })

   const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push("/");
   };

    return ( 
    
    
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Fill the details to Sign Up</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Name</FormLabel>
              <FormControl>
                <Input type='name'className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Email</FormLabel>
              <FormControl>
                <Input type='email'className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"placeholder="Enter Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
           <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Password</FormLabel>
              <FormControl>
                <Input type='password'className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
             <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Confirm Password</FormLabel>
              <FormControl>
                <Input type='confirmPassword'className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />

         <Button type="submit" className="w-full">Sign Up</Button>
     </form>
    </Form>
            </CardContent>
            </Card>
 );
}
 
export default RegisterForm;