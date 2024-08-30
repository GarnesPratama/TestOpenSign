---
title: ENV variables which are used to setup OpenSign™ with Docker on Localhost
---

## Information About ENV variables which are used to setup OpenSign™ with Docker on Localhost
To set up OpenSign™ locally using Docker, the following prerequisites are required: 

Environment Varaibles:

| Environment Varibale  | Value | Description |
| ------------- | ------------- | ------------- |
| PUBLIC_URL  | http://localhost:3000  | Set it to the URL form where the app home page will be accessed |
| GENERATE_SOURCEMAP  | false | Set it to true if you want to generate the Sourcemap for debugging |
| REACT_APP_SERVERURL  | http://localhost:8080/app  | Set it to the URL from where APIs will be accessible, for local development it should be localhost:8080/app (use your local port number instead) |
| REACT_APP_APPID  | opensignstgn  | A 12 character long random app identifier. The value of this should be same as APP_ID which is a variable used by backend API. |
| APP_ID  | opensignstgn  | A 12 character long random app identifier. The value of this should be same as REACT_APP_APPID which is a variable used by Frontend React App. |
| appName  | open_sign_server  | Name of the app. It will be visible in the verification emails sent out. |
| MASTER_KEY  | XnAadwKxxByMr  | A 12 character long random secret key that allows access to all the data. It is used in Parse dashboard config to view all the data in the database. |
| MONGODB_URI  | mongodb://host.docker.internal:27017/OpenSignDB  | Mongodb URI to connect to |
| PARSE_MOUNT  |/app  | Path on which APIs should be mounted. Do not change this. This variable shall be removed & value hardcoded in the source code in coming versions. |
| SERVER_URL  | http://localhost:8080/app  | Set it to the URL from where APIs will be accessible to the NodeJS functions, for local development it should be localhost:8080/app (use your local port number instead) |
| DO_SPACE  | DOSPACENAME  | Digital ocean space name or AWS S3 bucket name for uploading documents |
| DO_ENDPOINT  | ams3.digitaloceanspaces.com  | Digital ocean spaces endpoint or AWS S3 endpoint for uploading documents |
| DO_BASEURL  |https://DOSPACENAME.ams3.digitaloceanspaces.com  | Digital ocean baseurl or AWS S3 base URL |
| DO_ACCESS_KEY_ID  | YOUR_S3_ACCESS_ID  | Digital ocean spaces access key ID or AWS s3 Access key ID for uploading the docs |
| DO_SECRET_ACCESS_KEY  | YOUR_S3_ACCESS_KEY  | Digital ocean spaces secret access key or AWS s3 secret access key for uploading the docs |
| DO_REGION  | YOUR_S3_REGION  | Digital ocean spaces region or AWS s3 region |
| USE_LOCAL  | FALSE  | To use local file storage to save file |
| MAILGUN_API_KEY  | YOUR_MAILGUNAPI_KEY  | Mailgun API Key |
| MAILGUN_DOMAIN  | YOUR_MAILGUNAPI_DOMAIN | Mailgun API Domain |
| MAILGUN_SENDER  | - | Mailgun Sender Mail ID |
| PFX_BASE64  | - | Base64 encoded PFX or p12 document signing certificate file. You can generate base64 encoded self sign certificate using the passphrase. |
| PASS_PHRASE | opensign | Pass phrase of PFX or p12 document signing certificate file.|

# Steps to generate self-signed document singing certificate
```
# execute below command and use passphrase 'opensign'
openssl genrsa -des3 -out ./local_dev.key 2048
openssl req -key ./local_dev.key -new -x509 -days 365 -out ./local_dev.crt
openssl pkcs12 -inkey ./local_dev.key -in ./local_dev.crt -export -out ./local_dev.pfx
openssl base64 -in ./local_dev.pfx -out ./base64_pfx
```