import { createLogger, transports, format } from 'winston'

const { combine, timestamp, label, printf } = format;

const date = new Date();

const myFormat = printf((props) => {
    const { level, timestamp, message, url, method, lineNumber } = props;
    return `${timestamp} ${level} - ${method} - ${url} \n- Line Number: ${lineNumber} - ${message}\n\n`;
});

let transportsConfig = [];
if (process.env.NODE_ENV === 'development') {
    transportsConfig.push(new transports.File({ filename: `./logs/${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}.log` }));
}

const logger = createLogger({

    format: combine(
        label({ label: "CUSTOM", message: true }),
        timestamp(),
        myFormat
    ),

    transports: transportsConfig,
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === 'development') {
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}

export default logger;