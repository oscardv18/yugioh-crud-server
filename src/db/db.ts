import mongoose from "mongoose";

const dbConnection = (url: string) => {
    mongoose.connect(url)
        .then(() => console.log(" [MongoDB] Database is running on port 27017"))
        .catch((err) => console.log(err))

    const db = mongoose.connection;

    db.on('connecting', () => {
        console.log(" [MongoDB] Connecting...")
    })
    db.on('connected', () => {
        console.log(" [MongoDB] Connection successfully!")
    })
    db.on('error', () => {
        console.log(" [MongoDB] Connection error!")
    })
}

export default dbConnection;

