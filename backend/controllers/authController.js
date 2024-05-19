const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthDate: req.body.birthDate,
      image: req.body.photo,
      hashedPassword: req.body.hashedPassword,
      confirmPassword: req.body.confirmPassword,
      personelDetails: {
        genderIdentity: req.body.gender,
        genderInterest: req.body.genderPreference,
        about: req.body.about,
      },
    });

    const token = signToken(newUser._id);

    res.status(201).json({ token, user: newUser }); // daha sonra da bu olusan token'i client'e gonderiyoruz.
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((el) => el.message);
      return res.status(400).json({ result: errors.join(" ") });
    }
    if (err.code && err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res
        .status(400)
        .json({ result: `This e-mail address already in use!` });
    }
    res.status(400).json({ result: "Please fill all the required areas." });
  }
};
exports.login = async (req, res) => {
  const { currUserEmail, currUserPassword } = req.body; // object destructring

  // 1-) Bir email ve password girildi mi diye kontrol et.
  if (!currUserEmail || !currUserPassword) {
    // buraya normalde return next(new AppError('Please provide email and password!',400)); gelicel.
    return res
      .status(400)
      .json({ result: "please enter your email and password." });
  }

  // 2-) Girilen e-mailde bir user var mi ve password dogru mu?
  const user = await User.findOne({ email: currUserEmail }).select(
    "+hashedPassword"
  ); // userModel tasarlarken password'u gizledigimiz icin, bu sekilde select ile yazmazsak outputta bize vermez.

  // simdi de, user'in req.body'de verdigi password ile databasede tutulan password ayni mi diye kontrol edicez. tabii databasede encryptli hali tutuldugu icin, once decrpyt yapmamiz lazim. bunu da userModel'de yapicaz cunku datanin direkt kendisiyle ilgili olan seylerin userModel'da yapilmasi mantiklidir.
  if (!user || !(await user.correctPassword(currUserPassword))) {
    return res.status(401).json({ result: "incorrect e-mail or password" });
  }

  // 3-) If everything is ok, send token to client
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "Lax",
  });
  res.status(200).json({ token });
};
