"use client"
import React from "react"
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PostData from "@/lib/data-access/postRoom"




const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(10).max(255),
    github_repo: z.string().min(10).max(255),
    primary_programming_language: z.string().min(10).max(255)

})

export function CreateRoomForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            github_repo: "",
            primary_programming_language: ""
        },
    })

    async function onSubmit(values) {
        try {
            setIsLoading(true)
            const method = "POST";
            const res = await PostData(values, method)
            // got to the home and clear the form and clear the cache
            window.location.href = "/"


        }
        catch (error) {
            console.log(error)
        }
        finally {
            //  add a time out to show the loader

            setIsLoading(false)

        }
        // revalidatePath("/")
    }
    return (
        isLoading ? (
            <Skeleton className="w-[100px] h-[20px] rounded-full" />

        ) : (
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Project Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="github_repo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Github Repo Link
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="primary_programming_language"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Primary Programming Language
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="mt-4" >Submit</Button>
                    </form>

                </Form>
            </div>)
    )

}