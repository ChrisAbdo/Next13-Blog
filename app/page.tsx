import React from "react";
import Markdown from "markdown-to-jsx";
import { prisma } from "@/prisma/db";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });

  return (
    <div>
      <div>
        {posts.map((post) => (
          <article key={post.id}>
            <time dateTime={post.createdAt.toISOString()}>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
              }).format(post.createdAt)}
            </time>
            <span>{post.title}</span>
            <Markdown>{post.content}</Markdown>
            <img src={post.author?.image!} alt={post.author?.name!} />
            <span>{post.author?.name}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
