import { NFTStorage, File } from "nft.storage";
import mime from "mime";

import config from "../config";
import fs from "fs";
import path from "path";

/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
export default async function storeFile(name, description) {
  const image = await fileFromPath("src/utils/certificate.jpg");
  const nftstorage = new NFTStorage({ token: config.NFT_STORAGE_API_KEY });
  const metadata = await nftstorage.store({
    image,
    name,
    description,
  });
  console.log(metadata);
  return metadata;
}

/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
async function fileFromPath(filePath) {
  const content = await fs.promises.readFile(filePath);
  const type = mime.getType(filePath);
  return new File([content], path.basename(filePath), { type });
}
