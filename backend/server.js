import express from "express"
import cors from "cors"


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

export default app