const { getFiles } = require('../apicom/getFiles');
const { downloadFile } = require('../apicom/downloadFile');
const { deleteF } = require('../apicom/deleteFile');

module.exports.getAllConfigs = (req, res) => {
  getFiles()
    .then((files) => {
      res.send(files);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports.download = async (req, res) => {
  const files = await getFiles();
  const filename = req.params.name;
  if (files.includes(filename)) {
    const result = await downloadFile(filename);
    res.send(result);
  } else {
    res.status(500).send("Can't found the file ... ")
  }
};

module.exports.delete = async (req, res) => {
  const files = await getFiles();
  const filename = req.params.name;
  if (files.includes(filename)){
    const result = await deleteF(filename);
    res.send(result);
  }else {
    res.status(500).send("Can't found the file ... ")
  }
};
