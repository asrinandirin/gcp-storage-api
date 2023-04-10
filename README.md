# How to use this api

### Local Test
Put your GCP service account key and config values (bucket name and project ID) to the referenced json files under config folder. Then mount the config folder to the /var/config in container.

## V1 Features

- Get all files.
- Download spesific file.
- Delete spesific file.

## Mapping

```sh
127.0.0.1:<port>
```

| Method | URL | Returns |
| ------ | ------ | ------ | 
| Get | /configs | Array
| Get | /configs/download/<file name> | Link
| Get | /configs/delete/<file name> | 



