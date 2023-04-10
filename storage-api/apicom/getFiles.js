const key = require('/var/config/key.json')
const config = require('/var/config/config.json')

// This Function Gets All Files in Spesific Bucket in GCP
module.exports.getFiles = () =>  {

  // The ID of your GCS bucket
  const bucketName = config.bucketName;

  // Imports the Google Cloud client library
  const { Storage } = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    projectId: config.projectID,
    keyFilename: "/var/config/key.json",
  });

  async function listFiles() {
    const AllFiles = [];
    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();
    files.forEach((file) => {
      AllFiles.push(file.name)
      // console.log(file.name);
    });
    return AllFiles;
  }

  const Files = listFiles().catch(console.error);
  return Files;
}
