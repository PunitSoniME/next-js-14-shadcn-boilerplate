'use client';

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useConfirmationDialogContext } from "@/providers/ConfirmationDialogProvider";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { AppLoader2Icon } from "@/icons";

export default function ConfirmationDialog() {

    const { dialogConfig, closeDialog } = useConfirmationDialogContext();
    const {
        open, title, message, onSuccess,
        children, okButtonText
    } = dialogConfig;

    const [isLoading, setIsLoading] = useState(false);

    const onSuccessClicked = () => {
        setIsLoading(true);
        onSuccess();
    }

    useEffect(() => {
        if (open === false) setIsLoading(false);
    }, [open])

    return <AlertDialog
        defaultOpen={false}
        open={open}
    >
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title ?? 'Are you sure ?'}</AlertDialogTitle>

                <AlertDialogDescription>
                    {message ? message : children}
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogCancel
                    disabled={isLoading}
                    onClick={() => {
                        closeDialog();
                    }}>
                    Cancel
                </AlertDialogCancel>

                <Button
                    disabled={isLoading}
                    className="md:w-20"
                    onClick={onSuccessClicked}
                >
                    {
                        isLoading
                            ? <AppLoader2Icon className='h-4 w-4 animate-spin' />
                            : (okButtonText ?? 'Ok')
                    }
                </Button>

            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}