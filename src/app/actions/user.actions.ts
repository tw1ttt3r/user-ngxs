import { User } from '../models/User';

/* Define types and payloads*/

/*Action with metadata */
export class AddUser{
    static readonly type = '[User] Add';
    /*metadata */
    constructor(public payload: User){}
}

export class DeleteUser{
    static readonly type = '[User] Delete';
    constructor(public name: string){}
}