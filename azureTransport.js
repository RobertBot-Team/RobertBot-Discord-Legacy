/* global process */
import Transport from "winston-transport";
import { BlobServiceClient } from "@azure/storage-blob";
import { Buffer } from "buffer";

export default class AzureTransport extends Transport {
    constructor(opts = {}) {
        super(opts);

        const connectionString =
            process.env.AZURE_STORAGE_CONNECTION_STRING;

        this.containerName =
            process.env.AZURE_STORAGE_CONTAINER;

        const blobServiceClient =
            BlobServiceClient.fromConnectionString(connectionString);

        this.containerClient =
            blobServiceClient.getContainerClient(this.containerName);
    }

    async log(info, callback) {
        try {
            if (info.level !== "error") {
                callback();
                return;
            }

            const blobName =
                `error-${Date.now()}-${Math.random()
                    .toString(36)
                    .slice(2)}.json`;

            const blockBlobClient =
                this.containerClient.getBlockBlobClient(blobName);

            const data = JSON.stringify(info, null, 2);

            await blockBlobClient.upload(
                data,
                Buffer.byteLength(data)
            );

        } catch (err) {
            console.error("Azure log upload failed", err);
        }

        callback();
    }
}