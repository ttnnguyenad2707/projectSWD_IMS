import bcrypt from 'bcrypt'
import { Account } from '../models/index.js';
import genAccessToken from './genToken.service.js';

const REFRESH_KEY = process.env.REFRESH_KEY



const accountService = {
    register: async (req, res) => {

        const { fullname, phone, email, password } = req.body;
        try {
            const existUser = await Account.findOne({ where: { email } });
            if (existUser) {
                res.status(400).json({
                    message: "Email has exist"
                })
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                const resultAccount = {
                    email,
                    password: hashedPassword,
                }
                await Account.create({
                    Fullname: fullname,
                    Phone: phone,
                    Email: email,
                    Password: hashedPassword
                }).then(data => {
                    return res.status(200).json({
                        message: "Register Successfully",
                        data: {
                            Fullname: data.Fullname,
                            Phone: data.Phone,
                            Email: data.Email,
                        }
                    })
                })

            }
        } catch (error) {
            console.log("Error" + error.toString());

            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await Account.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            const isPasswordValid = await bcrypt.compare(password, user.Password);

            if (!isPasswordValid) {
                return res.status(401).json({
                    message: "Invalid password",
                });
            }
            const accessToken = await genAccessToken(user);

            res.cookie("accessToken", accessToken, {
                httpOnly: false,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            return res.status(200).json({
                message: "Login successful",
                data: {
                    email: user.Email,
                },
            });
        } catch (error) {
            console.log("error" + error);
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },
    logout: async (req, res) => {
        res.clearCookie("accessToken");
        res.status(200).json("Logout successful");
    }


}

export default accountService