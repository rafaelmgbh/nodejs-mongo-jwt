const moongose = require("../database");
const bcrypt = require("bcryptjs");

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


// Antes de salvar o usuário, criptografe a senha
UserSchema.pre("save", async function(next){

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    
});

const User = moongose.model("User", UserSchema);

module.exports = User;