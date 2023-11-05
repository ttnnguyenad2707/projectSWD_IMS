import jwt from 'jsonwebtoken'


const ACCESS_KEY = process.env.ACCESS_KEY

const genAccessToken= (user) =>  {
    return jwt.sign({
        id: user.id,
        role: user.roleId
    }, ACCESS_KEY, { expiresIn: "5h" });
}
export default genAccessToken
//cho vào file loginService