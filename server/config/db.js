import chalk from 'chalk';
import mongoose from 'mongoose';
import { dbURL } from './config.js';
const connectDB = async() =>{
    try{
        await mongoose.connect(dbURL)
        console.log(`${chalk.green.italic('Connection established')}`)
    }catch(err){
        console.log(`${chalk.red.bold('ERROR At Connection:-')} ${err}`)
    }
}

export default connectDB;