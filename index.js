const express = require("express")
const path = require("path")
const pool = require("./db")

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../my-app")))

// An API endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
    var list = ["item1", "item2", "item3"]
    res.json(list)
    console.log("Sent list of items")
})

// Handles any other requests that don't match
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname+"../public/index.html"))
// })

// middleware ??
app.use(express.json())

// Routes

// Create a movement
app.post("/movements", async(req, res) => {
    try {
        const { concept, amount, dateM, typeM } = req.body
        const newMovement = await pool.query(
            "INSERT INTO movement (concept, amount, dateM, typeM) VALUES ($1, $2, $3, $4) RETURNING *", 
            [concept, amount, dateM, typeM]
            )

        res.json(newMovement.rows[0])
    } catch (e) {
        console.error(e.message)
    }
})

// Get all movements
app.get("/movements", async(req, res) => {
    try {
        const allMovements = await pool.query("SELECT * FROM movement")
        res.json(allMovements.rows)
    } catch (e) {
        console.error(e.message)
    }
})

// Get a movement
app.get("/movements/:id", async(req, res) => {
    try {
        const { id } = req.params
        const movement = await pool.query(
            "SELECT * FROM movement WHERE movement_id = $1", 
            [id]
            )
        res.json(movement.rows[0])
    } catch (e) {
        console.error(e.message)
    }
})


// Update a movement
app.put("/movements/:id", async(req, res) => {
    try {
        const { id } = req.params
        const { concept, amount, dateM, typeM } = req.body
        const updateMovement = await pool.query(
            "UPDATE movement SET concept = $1, amount = $2, dateM = $3, typeM = $4 WHERE movement_id = $5",
            [concept, amount, dateM, typeM, id]
            )
        res.json("Movement updated!")
    } catch (e) {
        console.error(e.message)
    }
})

// Delete a movement
app.delete("/movements/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteMovement = await pool.query(
            "DELETE FROM movement WHERE movement_id = $1",
            [id]
        )
        res.json("Movement deleted")
    } catch (e) {
        console.error(e.message)
    }
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


