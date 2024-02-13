import React from 'react';
import {getAuthSession} from "@/src/utils/auth";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {User2} from "lucide-react";
import {DropdownMenuItemLogout} from "@/src/layouts/auth/LogoutButton";

export const UserProfile = async() => {
    const session = await getAuthSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" className="p-4">
                    {session?.user.name ?? ""}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User2 className="mr-2 h-4 w-4"/>
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItemLogout/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}