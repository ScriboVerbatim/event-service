const express = require('express')
const app = express()
const port = 4030
const packageJsonData = require('./package.json')

app.get('/health', (req, res) => {
    const { name, version } = packageJsonData
    res.send({ name, version })
})

app.get('/indexStaffEvents', (req, res) => {
    res.json([{ type: "assignment", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }, { type: "timeOff", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }])
})

app.listen(port, () => {
    console.log(`Events service listening on port ${port}`)
})