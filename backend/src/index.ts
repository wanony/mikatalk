import app from './app.js'
import { connectToDb } from './db/connection.js'

const PORT = process.env.PORT || 5050
connectToDb().then(() => {
    app.listen(PORT, () => console.log("working boss"));
}).catch(err => console.log(err))
