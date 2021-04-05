# Simple Schema Registry
Use ```npm start``` to run the server.

Use the following cURL to add a schema:
```
curl --location --request POST 'localhost:3000/schemas' \
--header 'Content-Type: application/json' \
--data-raw '{
    "schemaBytePayload": "Sarthak"
}'
```

Use the following curl to get all the schemas:
```
curl --location --request GET 'localhost:3000/schemas'
```

Use the following curl to get schema using ID:
```
curl --location --request GET 'localhost:3000/schemas/<id>'
```

