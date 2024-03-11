'use client'

import { TooltipProvider } from "@/components/ui/tooltip";
import { useProvidersTree } from "react-helper-hooks";
import { ConfirmationDialogProvider } from "./ConfirmationDialogProvider";
import { Sheet } from "@/components/ui/sheet";
import { ThemeProvider } from "./ThemeProvider";

// This context provider is passed to any component requiring the context
export const ProvidersTreeProvider = ({ children }) => {

    const buildProvidersTree = useProvidersTree();
    const ProvidersTree = buildProvidersTree([
        [TooltipProvider, { delayDuration: 0 }],
        [ThemeProvider, {
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true
        }],
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
