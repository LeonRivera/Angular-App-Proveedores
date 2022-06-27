import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {


  user:User = new User();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  register():void{
    console.log("registrando");
    this.userService.create(this.user).subscribe(
      resp => {
        console.log(resp);
      }
    )
  }

}
