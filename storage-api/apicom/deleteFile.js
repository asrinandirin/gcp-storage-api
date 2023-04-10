const key = require('/var/config/key.json')
const config = require('/var/config/config.json')

module.exports.deleteF = (fileName, bucketName = config.bucketName) => {
  // Imports the Google Cloud client library
  const { Storage } = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    projectId: config.projectId,
    keyFilename: "/var/config/key.json",
  });

  const deleteOptions = {
    // ifGenerationMatch: generationMatchPrecondition,
  };

  async function deleteFile() {
    await storage.bucket(bucketName).file(fileName).delete(deleteOptions);
    const deletedFile = {
      "name": fileName,
      "status": "Deleted"
    }
    return deletedFile ;
  }

  return deleteFile().catch((err) => {
    // console.log(err.message);
    return err.message;
  });
  // [END storage_delete_file]
};
