import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from "@clerk/express"
import clerkWebhooks from "./controllers/clerkWebhooks.js"

const app = express()
app.use(cors())
app.use(express.json())
connectDB()
app.use(clerkMiddleware())
app.use("/api/clerk", clerkWebhooks)

app.get("/", (req, res) => {
    res.send("Api Connected successfully")
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is running on port${port}`))