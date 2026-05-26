import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = (req, res) => {
  const user = req.body;

  res.json({
    message: "User created",
    user
  });
};

export const loginUser = async (req, res) => {
    const user = req.body;

    const password = "123456";

    const hashedPassword = await bcrypt.hash(password, 10);

    const isMatch = await bcrypt.compare(
    user.password,
    hashedPassword
    );

    if(isMatch){
        const token = jwt.sign(
        {
            userId: 1,
            email: "test@test.com"
        },
        "secretkey",
        {
            expiresIn: "1h"
        }
        );

        console.log(token);
    }

    res.json({
        message: "login user",
        user
    })

}



