"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CreditCard,
  LogOut,
  Menu,
  PlusCircle,
  Settings,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    // <div className="flex justify-between">
    //   <div className="flex justify-between">
    // <Link
    //   href="/examples/dashboard"
    //   className="text-sm font-medium transition-colors hover:text-primary"
    // >
    //   Overview
    // </Link>
    // <Link
    //   href="/examples/dashboard"
    //   className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    // >
    //   Customers
    // </Link>
    // <Link
    //   href="/examples/dashboard"
    //   className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    // >
    //   Products
    // </Link>
    // <Link
    //   href="/examples/dashboard"
    //   className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    // >
    //   Settings
    // </Link>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
    //       <Avatar className="h-8 w-8">
    //         <AvatarImage src={session?.user.image} />
    //         <AvatarFallback>SC</AvatarFallback>
    //       </Avatar>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuLabel className="font-normal">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">shadcn</p>
    //         <p className="text-xs leading-none text-muted-foreground">
    //           m@example.com
    //         </p>
    //       </div>
    //     </DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>
    //         <User className="mr-2 h-4 w-4" />
    //         <span>Profile</span>
    //         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         <CreditCard className="mr-2 h-4 w-4" />
    //         <span>Billing</span>
    //         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         <Settings className="mr-2 h-4 w-4" />
    //         <span>Settings</span>
    //         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         <PlusCircle className="mr-2 h-4 w-4" />
    //         <span>New Team</span>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem onSelect={() => signOut()}>
    //       <LogOut className="mr-2 h-4 w-4" />
    //       <span>Log out</span>
    //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    //   </div>
    // </div>
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {" "}
            <Link
              href="/new-post"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              New Post
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex">
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!session && (
            <Button variant="ghost" onClick={() => signIn()}>
              Log in
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
