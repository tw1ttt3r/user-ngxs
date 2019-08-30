import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import Actions
import { DeleteUser } from './actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleapp';
  angForm: FormGroup
  constructor(private store:Store,private fb:FormBuilder){
    this.createForm();
  }

  createForm():void{
    this.angForm = this.fb.group({
      name:['',Validators.required]
    });
  }
  
  deleteUser(nombre:string):void{
    console.log(nombre);
    this.store.dispatch(new DeleteUser(nombre))
  }
}
