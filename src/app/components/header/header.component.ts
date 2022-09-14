import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string = 'title';
  @Input() iconPath: string = '../../assets/person.svg';
  usernameSubscription: Subscription;
  currentUser = '';
  constructor(private userService: UserService) {
    this.usernameSubscription = this.userService.user.subscribe((x) => {
      console.log(x);
      this.currentUser = x;
    });
  }

  ngOnInit(): void {}

  onProfileClick() {
    console.log(this.currentUser);

    alert(this.currentUser);
  }
  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }
}
