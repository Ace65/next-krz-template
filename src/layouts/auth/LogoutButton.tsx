'use client'

import React, {useTransition} from 'react';
import {signOut} from "next-auth/react";
import {Loader} from "@/components/krz/loader";
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import {LogOut} from "lucide-react";

export const DropdownMenuItemLogout = () => {
    const [isPending, startTransition] = useTransition();
    return (
        <DropdownMenuItem onClick={ () => {startTransition(() => {signOut();});}}>
            {isPending ? <Loader className="mr-2 h-4 w-4"/> : <LogOut className="mr-2 h-4 w-4" />}
            Logout
        </DropdownMenuItem>
    )
}