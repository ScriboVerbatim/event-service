export default function (req, res) {
    res.send([{ type: "assignment", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }, { type: "timeOff", startsAt: "2023-08-29T12:00:00.000Z", endsAt: "2023-08-29T16:00:00.000Z" }])
}