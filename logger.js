/* global process */
import fs from "fs";
import path from "path";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { fileURLToPath } from "url";
import AzureTransport from "./azureTransport.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logsDir = path.join(__dirname, "logs");

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

const consoleFormat = winston.format.printf(
    ({ level, message, timestamp, stack, ...meta }) => {
        let output =
            `${timestamp} ${level}: ${message}`;
        if (Object.keys(meta).length) {
            output += ` ${JSON.stringify(meta)}`;
        }
        if (stack) {
            output += `\n${stack}`;
        }
        return output;
    }
);

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true })
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                consoleFormat
            )

        }),
        new DailyRotateFile({
            filename: path.join(
                logsDir,
                "app-%DATE%.log"
            ),
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "14d",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        }),
        new DailyRotateFile({
            filename: path.join(
                logsDir,
                "error-%DATE%.log"
            ),
            datePattern: "YYYY-MM-DD",
            level: "error",
            maxSize: "20m",
            maxFiles: "30d",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({
                    stack: true
                }),
                winston.format.json()
            )

        }),
        new AzureTransport()
    ]
});

export default logger;