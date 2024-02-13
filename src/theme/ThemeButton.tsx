'use client';
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import { Button } from '@/components/ui/button';
import {Moon, SunMedium } from 'lucide-react';

export const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null

    return (
        <Button variant="ghost" size="sm" onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        }}>
            <SunMedium size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon size={20} className="absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"/>
            <span className="sr-only">Toggle darkMode</span>
        </Button>
    )
}
