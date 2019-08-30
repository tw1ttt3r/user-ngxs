import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import Store
import { Store } from '@ngxs/store';

//import Actions
import { AddUser } from '../../actions/user.actions';
 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;//definicion de la forma

  constructor(private fb:FormBuilder, private store: Store) {
    this.createForm();
   }

   createForm():void{
     this.angForm = this.fb.group({
       name:['',Validators.required],
       email:['',Validators.required]
     });
   }

   addUser(name,email):void{
     console.log(name,email);
     this.store.dispatch(new AddUser({name, email}))//dispatch to store
   }

  ngOnInit() {
  }

}
