const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "You must have a first name."],
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "You must have a last name."],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "You must have an email."],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email."],
    },
    birthDate: {
      type: Date,
      required: [true, "You must have a birth date."],
      validate: {
        validator: function (el) {
          const today = new Date();
          const adult = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          return el <= adult;
        },
        message: "You need to be older than 18 years old!",
      },
    },
    image: {
      type: String,
      required: [true, "You must have a photo."],
    },
    hashedPassword: {
      type: String,
      required: [true, "You need a password."],
      select: false,
    },
    confirmPassword: {
      type: String,
      validate: {
        validator: function (el) {
          return el === this.hashedPassword;
        },
        message: "Passwords are not the same.",
      },
    },
    personelDetails: {
      genderIdentity: {
        type: String,
        lowercase: true,
      },
      genderInterest: {
        type: String,
        lowercase: true,
      },
      about: {
        type: String,
        required: [true, "Please provide some information about yourself."],
        lowercase: true,
        minlength: [3, "Tell us a little bit more of yourself."],
        maxlength: [
          25,
          "Please don't use more than 25 letters to tell about yourself!",
        ],
      },
      instagramUsername: {
        type: String,
        required: [true, "Please provide your instagram account."],
      },
    },
    likedUsers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dislikedUsers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    matchedUsers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Match",
      },
    ],
  },
  { strictQuery: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next(); // eger password modified edilmediyse, direkt next olan middleware'i cagiririz. bu middleware'i kullanmayiz.

  this.hashedPassword = await bcrypt.hash(this.hashedPassword, 12); // hash async bir method.

  this.confirmPassword = undefined; // passwordConfirm'i tutmaya gerek bir validation bir basariyla gerceklestikten sonra zaten. sonucta bu alan input olarak required fakat database'de persistent olmasina gerek yok.
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.hashedPassword);
};
// burda this.password'u kullanabildik fakat yukarida password icin select:false yapmistik. eger authController'de password'u tekrar explicitliy olarak secmeseydik, this.password'u kullanamayabilirdik(?)

const User = mongoose.model("User", userSchema);

module.exports = User;
