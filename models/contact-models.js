const {Schema ,model }=require ("mongoose");
const contactschema=new Schema({
    username: {
        type: String,
        required: true
    },  email: {
        type: String,
        required: true
    },  message: {
        type: String,
        required: true
    },  instagram_id: {
        type: String,
        required: true
    }
})
const Contact=new model('Contact',contactschema);


module.exports=Contact
