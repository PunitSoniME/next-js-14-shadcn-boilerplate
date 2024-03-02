import { NextRequest, NextResponse } from "next/server";
import { STATUS_CODES as HTTP_STATUS_CODES } from "http";
import logger from "./logger.service";

function withErrorHandler(fn) {
    return async function (request: NextRequest, ...args) {
        try {
            const response = await fn(request, ...args);
            return NextResponse.json(response);
        } catch (error) {

            // Log the error to a logging system
            logger.log({
                level: "error",
                message: error.message,
                url: request.nextUrl.pathname,
                method: request.method,
                lineNumber: error.lineNumber    //  TODO: not getting line number yet
            });

            //  Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString
            //  error.name = '';    //  To remove the prefix 'Error: User not found'
            const splittedErrorMessage = error.message.split(":");
            const errorMessage = splittedErrorMessage.length > 1 ? splittedErrorMessage[1].trim() : splittedErrorMessage[0].trim();

            //  Reason of error.toString() is to generate the message without "Error" prefix in message
            //  We have removed that prefix in above error.name line
            //  And we need to generate the error message again
            return NextResponse.json({
                message: errorMessage
            },
                {
                    status: 412,    //  PreconditionFailed
                    statusText: HTTP_STATUS_CODES.PreconditionFailed
                }
            );
        }
    };
}

export default withErrorHandler;