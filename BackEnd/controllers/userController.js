import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'

const saltRounds = 10;

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
  const { first_name, last_name, email, password } = req.body

  const userExist = await User.findOne({ where: { email } })
  if(userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashPassword
    })
    res.send(newUser);
  } catch(err) {
    res.send(err);
  }
})


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user.id)
    })
  } else  {
    res.status(401)
    throw new Error('Invalid email or Password')
  }
})

export { registerUser, authUser }