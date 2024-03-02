import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function CustomTooltip({ label, children }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                {label}
            </TooltipContent>
        </Tooltip>
    )
}
