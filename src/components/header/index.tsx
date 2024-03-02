'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';

import {
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AppMenuIcon, AppUserSecretIcon } from '@/icons';
import { Button } from '../ui/button';
import { appName } from '@/lib/helpers';

const DarkMode = dynamic(() => import('@/components/DarkMode'));

const navigation = [
    // {
    //     label: routes.home.title,
    //     link: routes.home.path,
    //     pathsToCheck: [routes.home.path, routes.post.path]
    // }
];

export default function Header() {

    const router = useRouter();
    const pathname = usePathname();
    const splitLocation = pathname.split("/");

    const isActive = (pathsToCheck: string[]) => {
        return pathsToCheck.some((s: string) => s === `/${splitLocation[1]}`)
    }

    const NavigationLinks = ({ size, className = "" }) => navigation.map((item) => {
        return (
            <SheetClose asChild key={item.label}>
                <Button
                    name={item.label}
                    asChild
                    size={size}
                    className={`text-sm ${className}`}
                    variant={isActive(item.pathsToCheck) ? 'default' : 'ghost'}
                >
                    <Link href={item.link}
                    >
                        {item.label}
                    </Link>
                </Button>
            </SheetClose>
        );
    });

    return (
        <div className='border-b bg-primary-foreground shadow-sm sticky top-0 z-10'>

            <div className="px-2 md:container h-16 flex items-center justify-between">
                <Button
                    name={appName}
                    variant="link"
                    className='hover:no-underline p-0 font-bold text-xl tracking-wider text-primary cursor-pointer'
                    onClick={() => {
                        // router.push(routes.home.path);
                    }}>
                    {appName}
                </Button>

                <div className="gap-3 hidden lg:flex">
                    <NavigationLinks size="xs" />
                </div>

                <div className='flex gap-2 justify-center items-center'>

                    <DarkMode />

                    <SheetTrigger asChild>
                        <Button name="menu" variant="outline" size="icon" className='lg:hidden visible'>
                            <AppMenuIcon size={18} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='w-[300px] py-6 px-4'>
                        <div className="grid gap-3 my-4">
                            <NavigationLinks size="sm" className="justify-start" />
                        </div>
                    </SheetContent>

                </div>
            </div>

        </div>
    )
}
