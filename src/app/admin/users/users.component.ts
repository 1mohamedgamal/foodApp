import { Component, OnInit } from '@angular/core';
import { IUser, IUserTable } from './models/users-admin';
import { UserAdminService } from './services/user-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from '../categories/components/delete/delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  pageSize = 4;
  pageNumber = 1;
  tableResponse: IUserTable | undefined;
  tableData: IUser[] = [];
  searchValue: string = '';
  groupId: number = 0;
  ToastrService: any;

  constructor(
    private _UsersAdminService: UserAdminService,
    private dialog: MatDialog,
    private _ToastrService: ToastrService,
    private Router: Router
  ) {}

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    let prams = {};
    if (this.groupId == 1 || this.groupId == 2) {
      prams = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        userName: this.searchValue,
        groups: this.groupId,
      };
    } else {
      prams = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        userName: this.searchValue,
      };
    }

    this._UsersAdminService.getAllUsers(prams).subscribe({
      next: (res: IUserTable) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;
        console.log(this.tableData);
      },
    });
  }
  openDeleteDialog(usersData: any): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: usersData,
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result.id);
        this.onDeleteUser(result.id);
        this.Router.navigate(['/dashboard/admin/users']);
        this.getTableData();
      }
    });
  }
  onDeleteUser(id: number) {
    this._UsersAdminService.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.ToastrService.error('error');
      },
      complete: () => {
        this.ToastrService.success('User deleted', 'Success');
        this.getTableData();
      },
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageNumber = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getTableData();
  }
}
