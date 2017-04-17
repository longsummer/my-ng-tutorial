import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = '';
  configMenuItem = ['SMTP', 'NTP', 'NAS'];
  configMenuButton = 'configMenu';
  userMenuItem = ['用户管理', '修改密码', '退出登陆'];
  userMenuButton = 'userMenu';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
