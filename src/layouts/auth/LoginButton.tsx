'use client'

import React, {useTransition} from 'react';
import {Button, buttonVariants} from "@/components/ui/button";
import clsx from "clsx";
import {Icons} from "@/components/krz/icons";
import {signIn} from "next-auth/react";
import {Loader} from "@/components/krz/loader";

export const LoginButton = () => {
    const [isPending, startTransition] = useTransition();
    return (
        <Button className={clsx(buttonVariants())}
                onClick={ () => {
                    startTransition(() => {
                        signIn('github');
                    });
                }}
        >
            {isPending ? (
                <Loader className="mr-2 h-4 w-4"/>
            ): (<Icons.gitHub className="mr-2 h-4 w-4" />)
            }
            Login with Github
        </Button>
    )
}