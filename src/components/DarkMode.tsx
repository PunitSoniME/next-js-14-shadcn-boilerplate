'use client'

import React from 'react'
import { Button } from './ui/button'
import { useDarkModeContext } from '@/providers/DarkModeProvider'
import CustomTooltip from './CustomTooltip';
import { AppSunIcon, AppMoonIcon } from '@/icons';

export default function DarkMode() {

    const { mode, toggleMode } = useDarkModeContext();

    return (
        <CustomTooltip label={`${mode === 'dark' ? 'Light' : 'Dark'} Mode`}>
            <Button
                size='icon'
                variant='ghost'
                name="dark-mode"
                onClick={toggleMode}>
                {
                    mode === 'dark'
                        ? <AppSunIcon size={20} className='text-orange-300' />
                        : <AppMoonIcon size={20} />
                }
            </Button>
        </CustomTooltip>
    )
}
