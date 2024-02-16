function indexStaffEvents(req, res) {
    const staffEvents = [{ type: "assignment", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }, { type: "timeOff", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }]
    res.send(staffEvents)
}

module.exports = indexStaffEvents