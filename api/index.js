export default async function handler(req, res) {
    try {
        const num = req.query.num;
        if (!num) return res.status(400).json({ error: "Missing number" });

        const apiURL = `https://api.x10.network/numapi.php?action=api&key=ASHUSHARMA_JI&number=${num}`;

        const response = await fetch(apiURL);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ error: "Server error", details: err.toString() });
    }
}
