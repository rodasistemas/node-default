import {Users} from "@models/Users";

export class UserController {
    getUser(){
        const users = new Users();
        users.setEmail('rodasistemas@gmail.com');
        users.setName('Rodrigo')
        return users;
    }
}