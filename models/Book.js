module.exports = (model, Schema) => {
    const Book = new Schema({
        author: String,
        title: String,
        description: String,
        image: String,
        link: String
    })

    return model('Book', Book)
}