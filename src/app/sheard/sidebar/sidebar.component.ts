import { Component } from '@angular/core';
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
  // menu: any;
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-home',
      link: '',
      isActive: true,
    },
    {
      title: 'Users',
      icon: ' fa-solid fa-users',
      link: 'admin/users',
      isActive: true,
    },
    {
      title: 'Categories',
      icon: 'fa-solid fa-table-cells',
      link: 'admin/categories',
      isActive: true,
    },
    {
      title: 'Recipes',
      icon: 'fa-solid fa-address-card',
      link: 'admin/recipes',
      isActive: true,
    },
    {
      title: 'change password',
      icon: 'fa-solid fa-lock',
      link: '',
      isActive: true,
    },
    {
      title: 'logout',
      icon: 'fa-solid fa-right-from-bracket',
      link: '',
      isActive: true,
    },
  ];
}
