/**
 * Created by zsx11 on 2016/9/29.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo',{
    text : String,
    done : Boolean
});