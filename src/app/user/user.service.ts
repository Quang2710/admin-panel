import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);

  users$ = this.usersSubject.asObservable();

  constructor() {
    this.users = [
      { id: 1, name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Admin' },
      { id: 2, name: 'Trần Thị B', email: 'b@example.com', role: 'User' }
    ];

    this.usersSubject.next(this.users);
  }

  addUser(user: User) {
    user.id = new Date().getTime();
    this.users.push(user);
    this.usersSubject.next(this.users);
  }

  updateUser(updateUser: User) {
    const index = this.users.findIndex(u => u.id === updateUser.id);
    if (index > -1) {
      this.users[index] = updateUser;
      this.usersSubject.next(this.users)
    }
  }
  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
    this.usersSubject.next(this.users)
  }
  getUserById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}
