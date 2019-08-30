import { State, StateContext, Selector, Action } from '@ngxs/store';
import { User } from '../models/User';
import { AddUser, DeleteUser } from '../actions/user.actions';

/*Definicion de statemodel */
export class UserStateModel{
    users: User[];
}

//Definicion de state
@State<UserStateModel>({
    name:'users',
    defaults:{
        users:[]
    }
})

export class UserState{
    //Memoriza el select
    @Selector()    
    static getUsers(state: UserStateModel){
        return state.users;
    }

    //Define la logica del Action
    @Action(AddUser)
    add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser){
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

    @Action(DeleteUser)
    delete({getState, setState}: StateContext<UserStateModel>, {name}: DeleteUser){
        const state = getState();
        let usersTmp = [];
        console.log(typeof name);
        usersTmp = state.users.filter(user => user.name !== name)
        setState({
            ...state,
            users: usersTmp
        })
    }
}