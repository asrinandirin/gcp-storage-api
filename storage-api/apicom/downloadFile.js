const key = require('/var/config/key.json')
const config = require('/var/config/config.json')

module.exports.downloadFile = (fileName, bucketName = config.bucketName) => {
  // Imports the Google Cloud client library
  const { Storage } = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    projectId: config.projectID,
    keyFilename: "/var/config/key.json",
  });

  async function generateSignedUrl() {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v2', // defaults to 'v2' if missing.
      action: 'read',
      expires: Date.now() + 1000 * 60 * 60, // one hour
    };

    // Get a v2 signed URL for the file
    const [url] = await storage
      .bucket(bucketName)
      .file(fileName)
      .getSignedUrl(options);

    const file = {
      name: fileName,
      url: url,
    };
    return file;
  }

  return generateSignedUrl().catch((err) => {
    console.log(err);
    return err;
  });
  // [END storage_generate_signed_url]
};
