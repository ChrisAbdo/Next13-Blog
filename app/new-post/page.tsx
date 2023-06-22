import React from "react";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

import { prisma } from "@/prisma/db";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  async function addPost(formData: FormData) {
    "use server";
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const category = String(formData.get("category"));
    const authorId = session?.user.id;
    await prisma.post.create({
      data: {
        title,
        content,
        category,
        authorId,
      },
    });
    redirect("/");
  }

  return (
    <div>
      <h1>New Post</h1>
      <form action={addPost}>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input name="title" placeholder="Title" id="title" required />
        <Textarea required id="content" rows={10} name="content" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
