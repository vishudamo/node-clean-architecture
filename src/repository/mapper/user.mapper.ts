import { Mapper } from "../../application/base";
import { UserModel, UserTypes } from "../../application/domain";
import { UserEntity } from "../entities/user.entity";

export class UserMapper extends Mapper<UserModel, UserEntity> {
    mapFrom(param: UserModel): UserEntity {
        return {
            _id: null,
            email: param.email,
            password: param.password,
            userType: UserTypes.Regular,
            firstName: param.firstName,
            lastName: param.lastName
        }
    }    
    
    mapTo(param: UserEntity): UserModel {
        return {
            _id: param._id,
            email: param.email,
            userType: param.userType,
            firstName: param.firstName,
            lastName: param.lastName
        }
    }
}