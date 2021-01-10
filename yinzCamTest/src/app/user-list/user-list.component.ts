import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {USERS} from '../mock-users';
import {UserService} from '../user.service'
import { MessageService } from '../messages.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users = USERS;
  selectedUser: User;

  heroes: User[];

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
    this.messageService.add(`UserService: Selected user id=${user.id}`);
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
}
