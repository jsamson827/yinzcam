import { Injectable } from '@angular/core';
import { User} from './user'
import { USERS } from './mock-users'
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the users
    this.messageService.add('userService: fetched users');
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }

}
