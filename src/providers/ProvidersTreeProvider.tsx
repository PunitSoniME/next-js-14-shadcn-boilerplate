'use client'

import { TooltipProvider } from "@/components/ui/tooltip";
import { useProvidersTree } from "react-helper-hooks";
import DarkModeProvider from "./DarkModeProvider";
import { ConfirmationDialogProvider } from "./ConfirmationDialogProvider";
import { Sheet } from "@/components/ui/sheet";

// This context provider is passed to any component requiring the context
export const ProvidersTreeProvider = ({ children }) => {

    const buildProvidersTree = useProvidersTree();
    const ProvidersTree = buildProvidersTree([
        [TooltipProvider, { delayDuration: 0 }],
        [DarkModeProvider],
        [ConfirmationDialogProvider],
    ]);

    return (
        <ProvidersTree>
            <Sheet>
                {children}
            </Sheet>
        </ProvidersTree>
    );
};
