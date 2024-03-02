'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type DialogType = {
    open: boolean;
    title?: string;
    message: string;
    onSuccess: Function;
    okButtonText?: string;
    children?: any;
};

export const ConfirmationDialogContext = createContext<{
    dialogConfig?: DialogType,
    setDialogConfig?: Dispatch<SetStateAction<DialogType>>,
    closeDialog?: Function
}>({
    dialogConfig: null,
    setDialogConfig: null,
    closeDialog: null
});

const initialDialogValues: DialogType = {
    open: false,
    title: "Are you sure?",
    message: null,
    onSuccess: null,
    okButtonText: "Ok"
};

// This context provider is passed to any component requiring the context
export const ConfirmationDialogProvider = ({ children }) => {

    const [dialogConfig, setDialogConfig] = useState<DialogType>({ ...initialDialogValues });

    const closeDialog = () => {
        setDialogConfig({ ...initialDialogValues });
    }

    return (
        <ConfirmationDialogContext.Provider
            value={{
                dialogConfig,
                setDialogConfig,
                closeDialog
            }}
        >
            {children}
        </ConfirmationDialogContext.Provider>
    );
};

export const useConfirmationDialogContext = () => {
    const context = useContext(ConfirmationDialogContext);

    if (!context) {
        throw new Error('useConfirmationDialogContext must be used within a ConfirmationDialogProvider');
    }

    return context;
}