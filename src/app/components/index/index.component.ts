import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//import Store
import { Store } from '@ngxs/store';

//import model
import { User } from '../../models/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users: Observable<User>;
 
  constructor(private store:Store) { 
    this.users = this.store.select(state => state.users.users);
  }

  ngOnInit() {
  }

}
