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
    // <div>
    //   <div>
    //     {posts.map((post) => (
    //       <article key={post.id}>
    // <time dateTime={post.createdAt.toISOString()}>
    //   {new Intl.DateTimeFormat("en-US", {
    //     dateStyle: "full",
    //   }).format(post.createdAt)}
    // </time>
    //         <span>{post.title}</span>
    //         <Markdown>{post.content}</Markdown>
    // <img src={post.author?.image!} alt={post.author?.name!} />
    // <span>{post.author?.name}</span>
    //       </article>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.id}>
              <time dateTime={post.createdAt.toISOString()}>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "full",
                }).format(post.createdAt)}
              </time>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                <Markdown
                  options={{
                    overrides: {
                      h1: {
                        component: "h1",
                        props: {
                          className:
                            "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                        },
                      },
                      h2: {
                        component: "h2",
                        props: {
                          className:
                            "mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
                        },
                      },
                      h3: {
                        component: "h3",
                        props: {
                          className:
                            "mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl",
                        },
                      },
                      h4: {
                        component: "h4",
                        props: {
                          className:
                            "mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl",
                        },
                      },
                      h5: {
                        component: "h5",
                        props: {
                          className:
                            "mt-2 text-base font-bold tracking-tight text-gray-900 sm:text-lg",
                        },
                      },
                      h6: {
                        component: "h6",
                        props: {
                          className:
                            "mt-2 text-sm font-bold tracking-tight text-gray-900 sm:text-base",
                        },
                      },
                    },
                  }}
                >
                  {post.content}
                </Markdown>

                <img src={post.author?.image!} alt={post.author?.name!} />
                <span>{post.author?.name}</span>
              </div>
            </div>
          ))}
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
