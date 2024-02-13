import React from 'react';
import Link from "next/link";
import {Home, TerminalSquare} from "lucide-react";
import { getAuthSession } from '../utils/auth';
import {ThemeButton} from "@/src/theme/ThemeButton";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { LoginButton } from './auth/LoginButton';
import {UserProfile} from "@/src/layouts/auth/UserProfile";

export const Header = async() => {
    const session = await getAuthSession();
    return (
        <header className="border-b border-b-accent top-0 bg-background w-full">
            <div className="container flex items-center py-4 m-auto gap-1">
                <h2 className="text-2xl font-bold mr-auto flex justify-center items-center">
                    <TerminalSquare className="mr-2 h-6 w-6"/>
                    APP
                </h2>
                {session?.user ?
                    <Avatar className="mr-2">
                        <AvatarImage src={session?.user.image ?? ""}/>
                    </Avatar>
                    : null}
                {session?.user ? <UserProfile/> : <LoginButton/>}
                <ThemeButton/>

            </div>
        </header>
    )
}