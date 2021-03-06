const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    stocks:{
        type: Schema.Types.Mixed,
        default: {}
    },
    cashValue: {
        type: Number,
        default: 100000
    },
    stockValue: {
        type: Number,
        default: 0
    },
    netValue: {
        type: Number,
        default: 0
    }
});

portfolioSchema.methods.netCalc = function(){
    return this.netValue = this.cashValue + this.stockValue;
};

module.exports = mongoose.model('Portfolios', portfolioSchema);
