const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const finance = new Schema({
    
    question: {
        type:String,
        unique: false,
        trim: true,
        },
        option1: {
        type: String,
        unique: false,
        trim: true,
        },
        option2: {
        type: String,
        unique: false,
        trim: true,
        },
        option3: {
        type: String,
        unique: false,
        trim: true,
        },
        option4: {
        type: String,
        unique: false,
        trim: true,
        },
        answer: {
        type: String,
        unique: false,
        trim: true,
        },
    
});

const production = new Schema({
    
    question: {
        type:String,
        unique: false,
        trim: true,
        },
        option1: {
        type: String,
        unique: false,
        trim: true,
        },
        option2: {
        type: String,
        unique: false,
        trim: true,
        },
        option3: {
        type: String,
        unique: false,
        trim: true,
        },
        option4: {
        type: String,
        unique: false,
        trim: true,
        },
        answer: {
        type: String,
        unique: false,
        trim: true,
        },
    
});

const resdev = new Schema({
    
    question: {
        type:String,
        unique: false,
        trim: true,
        },
        option1: {
        type: String,
        unique: false,
        trim: true,
        },
        option2: {
        type: String,
        unique: false,
        trim: true,
        },
        option3: {
        type: String,
        unique: false,
        trim: true,
        },
        option4: {
        type: String,
        unique: false,
        trim: true,
        },
        answer: {
        type: String,
        unique: false,
        trim: true,
        },
    
});

const sales = new Schema({
    
    question: {
        type:String,
        unique: false,
        trim: true,
        },
        option1: {
        type: String,
        unique: false,
        trim: true,
        },
        option2: {
        type: String,
        unique: false,
        trim: true,
        },
        option3: {
        type: String,
        unique: false,
        trim: true,
        },
        option4: {
        type: String,
        unique: false,
        trim: true,
        },
        answer: {
        type: String,
        unique: false,
        trim: true,
        },
    
});





const Finance = mongoose.model('Rel-Finance', finance);
const Production = mongoose.model('Rel-Production', production);
const Resdev = mongoose.model('Rel-ResDev', resdev);
const Sales = mongoose.model('Rel-Sales', sales);


module.exports.Finance = Finance;
module.exports.Production = Production;
module.exports.Resdev = Resdev;
module.exports.Sales = Sales;