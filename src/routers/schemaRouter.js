const fs = require('fs')
const express = require('express')
const router = new express.Router()
const {v4: uuidv4} = require("uuid")


router.use(express.json())

router.post('/schemas', async (req, res) => {
    const id = uuidv4()
    schema = {
        "id": id,
        "schemaBytePayload": req.body.schemaBytePayload
    }

    var localObjJSON = {
        "schemas": []
    }

    try {

        if(fs.existsSync('schemas.json')) {
            var localObj = fs.readFileSync('schemas.json')
            var localObjJSON = JSON.parse(localObj)
        }

        localObjJSON.schemas.push(schema)

        localObj = JSON.stringify(localObjJSON)
        fs.writeFileSync('schemas.json', localObj)

        res.status(200).send({"result": "success", "message": "Schema saved locally"})
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/schemas', async (req, res) => {
    var localObj = {
        "schemas": []
    }

    try {
        if(fs.existsSync('schemas.json')) {
            localObj = fs.readFileSync('schemas.json')
            localObjJSON = JSON.parse(localObj)
        }
        res.status(200).send(localObjJSON)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/schemas/:id', async (req,res) => {
    const _id = req.params.id
    try {
        if(fs.existsSync('schemas.json')) {
            var reqSchema
            var localObj = fs.readFileSync('schemas.json')
            var localObjJSON = JSON.parse(localObj)
            localObjJSON.schemas.forEach((schema) => {
                if(schema.id == _id) {
                    reqSchema = schema
                    return false
                }
            })
            if(!reqSchema) {
                return res.status(404).send({"result": "error", "message": "Schema not found"})
            }
        }
        res.status(200).send({"result": "success", "message": "Schema found", "data": reqSchema})
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router