const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    name: { type: String, required: [true, "you must give a valid name"] },
    email: {
      type: String,
      required: [true, "you must give email adress"],
      unique: true,
      lowerCase: true,
      validate: [validator.isEmail, " valid mail id is required"],
    },
  
    photo: String,
    roles: {
      type: String,
      default: "startupInit",
      enum: ["admin", "enterpreneur", "company", "startupInit"],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "password should have 8 charecters"],
    },
    confirmPassword: {
      type: String,
      required: [true, "please put the password to confirm"],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
      },
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    
    next();
  });

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };


  const  User=mongoose.model('User',userSchema);
  module.exports=User;