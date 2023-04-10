const express = require('express')
const router = express.Router()
const config = require('/var/config/config.json')

router.get('/', (req,res) => {
    const version = {
        "ApiVersion" : "1.0",
        "Project" : config.projectID,
        "Bucket" : config.bucketName,
        "Status": "Connected",
        "Url Mapping": {
            "/configs" : {
                "type" : "Array",
                "description" : "Returns all current configs in bucket."
            },
            "/download/<name>" : {
                "type" : "Json",
                "description" : "Returns current configs download links with it's name.",
                "values" : ["name", "url"]
            },
            "/delete/<name>" : {
                "type" : "Status",
                "description" : "Delete current config and return status."
            },
        },
        "Api Keys" : "Mount your variables to : /var/config "
    }

    res.send(version)
})

module.exports = router