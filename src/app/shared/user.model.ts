import { v4 as uuidv4 } from "uuid";
export class User {
    id: string
    nameInput: string
    nickNameInput: string
    passwordInput:string

    constructor(nameInput: string, nickNameInput: string, passwordInput: string) {
        this.id = uuidv4()
        this.nameInput = nameInput
        this.nickNameInput = nickNameInput
        this.passwordInput = passwordInput
    }
}