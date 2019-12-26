const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    links: [{
        // Связка модели пользователя и определённых записей Link в базе данных
        type: Types.ObjectId,
        ref: 'Link'
    }]
})

module.exports = model('User', schema)