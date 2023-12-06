import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
import { LogOutComponent } from 'src/app/auth/log-out/log-out.component';
import { AuthService } from 'src/app/auth/services/auth.service';
interface IMenu {
  title: string;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private _AuthService: AuthService
  ) {}
  // menu: any;
  isOpened: boolean = true;
  ngOnInit() {}
  isAdmin(): boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }
  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }

  menu: IMenu[] = [
    {
      title: 'home',
      icon: 'fa-solid fa-home',
      link: '/dashboard',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      title: 'Users',
      icon: ' fa-solid fa-users',
      link: '/dashboard/admin/Users',
      isActive: this.isAdmin(),
    },
    {
      title: 'Categories',
      icon: 'fa-solid fa-table-cells',
      link: '/dashboard/admin/categories',
      isActive: this.isAdmin(),
    },
    {
      title: 'Recipes',
      icon: 'fa-solid fa-address-card',
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin(),
    },
    {
      title: 'userRecipes',
      icon: 'fa-solid fa-calendar-day',
      link: '/dashboard/user/userRecipes',
      isActive: this.isUser(),
    },
    {
      title: 'favourites',
      icon: 'fa-solid fa-calendar-day',
      link: '/dashboard/user/favourites',
      isActive: this.isUser(),
    },
    // {
    //   title: 'change password',
    //   icon: 'fa-solid fa-lock',
    //   link: '',
    //   isActive: true,
    // },
    // {
    //   title: 'logout',
    //   icon: 'fa-solid fa-right-from-bracket',
    //   link: '',
    //   isActive: true,
    // },
  ];
  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        this.router.navigate(['/auth']);
      }
    });
  }
  logOut() {
    const dialogRef = this.dialog.open(LogOutComponent, {
      data: {},
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        this.router.navigate(['/auth']);
      }
    });
  }
}
