import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
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
  isAdmin(): Boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }
  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }

  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-home',
      link: '/dashboard/Home',
      isActive: true,
    },
    {
      title: 'Users',
      icon: ' fa-solid fa-users',
      link: '/dashboard/admin/Users',
      isActive: true,
    },
    {
      title: 'Categories',
      icon: 'fa-solid fa-table-cells',
      link: '/dashboard/admin/categories',
      isActive: true,
    },
    {
      title: 'Recipes',
      icon: 'fa-solid fa-address-card',
      link: '/dashboard/admin/recipes',
      isActive: true,
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
      width: '50%',
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
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    this.router.navigate(['/auth']);
  }
}
