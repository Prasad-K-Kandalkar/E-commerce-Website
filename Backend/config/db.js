import mongoose from 'mongoose'

const ConnectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)

    }catch(error){
        console.error(`Error ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDB