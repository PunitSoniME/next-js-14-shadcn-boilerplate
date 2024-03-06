import { NextRequest } from "next/server"
import withErrorHandler from "@/helpers/server/api-error-handling";

export const GET = withErrorHandler(async (req: NextRequest) => {
    try {
        return { message: "API is working fine" };
    } catch (ex) {
        throw new Error(ex);
    }
});

export const POST = withErrorHandler(async (req: NextRequest) => {
    try {
        return { message: "API with post is working fine" };
    } catch (ex) {
        throw new Error(ex);
    }
});

export const dynamic = "force-dynamic";
