const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const port = 8098

app.get('/', (req, res) => {
    console.log("Connected")
    return res.json({ msg: "Connected..", msg_type: 'good' })
})
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const reqponse = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {
                    "private-key": '0b4a1690-46fd-4a28-b2b0-89a1f4e016c5'
                }
            }
        )
        // return res.json({username:username,secret:''})
        return res.json({ username: username, secret: "sha256..." });
    } catch(e) {
        return res.status(e.response.status).json(e.response.data)
    }
});


app.listen(port, () => {
    console.log(`Port is ${port}`)
});