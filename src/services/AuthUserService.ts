import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthUserService{
  async execute({email, password}: IAuthRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorrect");
    }


    const token = sign({
      email: user.email
    }, "70f79885bf41700ccbfb60c686336604",{
      subject: user.id,
      expiresIn: "1d"
    });


    return token;
  }
}

export { AuthUserService }