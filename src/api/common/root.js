function root(req, res, { packageJsonData }) {
    const { name, version } = packageJsonData
    res.send({ name, version })
}

module.exports = root