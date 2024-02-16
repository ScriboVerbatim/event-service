const express = require('express')
const app = express()
const packageJsonData = require('./package.json')
const { indexStaffEventsHandler } = require('./src/api/staffEvents')
const { rootHandler } = require('./src/api/common')
const PORT = 4030

const context = { packageJsonData }

const pathHandlers = {
    "/": rootHandler,
    "/indexStaffEvents": indexStaffEventsHandler
}

createEndpoints(pathHandlers, app)
app.listen(PORT, () => {
    console.log(`Server is ready, listening to ${PORT}`)
})


function createEndpoints(pathHandlers, app) {
    for (const path in pathHandlers) {
        const handlerForPath = pathHandlers[path] // reference to handler function, e.g.: rootHandler, indexStaffEventsHandler
        app.get(path, (req, res) => handlerForPath(req, res, context))
    }
}