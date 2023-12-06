import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from './services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { DeleteComponent } from './components/delete/delete.component';
import { PageEvent } from '@angular/material/paginator';
import { ICategoryTable, ICategory } from '../models/cateogry';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  item: any;
  constructor(
    private _CategoriesService: CategoriesService,
    private dialog: MatDialog,
    private ToastrService: ToastrService
  ) {}

  tableResponse: ICategoryTable | undefined;
  tableData: ICategory[] | undefined = [];

  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  searchValue: string = '';

  ngOnInit() {
    this.getTableData();
  }
  getTableData() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchValue,
    };

    this._CategoriesService.getCategories(params).subscribe(
      (res) => {
        this.tableResponse = res;
        this.tableData = this.tableResponse?.data;

        if (!this.tableData || this.tableData.length === 0) {
        } else {
          console.log(this.tableResponse);
        }
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: {},
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.onAddCategory(result);
      }
    });
  }
  performAction(item: any, action: string) {
    if (action === 'delete') {
      this.openDeleteDialog(item);
    } else if (action === 'edit') {
      this.openEditCategory(item);
    }
  }

  onAddCategory(data: string) {
    this._CategoriesService.addCategory(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.ToastrService.error('error');
      },
      complete: () => {
        this.ToastrService.success('category added', 'Success');
        this.getTableData();
      },
    });
  }

  openDeleteDialog(categoryData: any): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: categoryData,
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result.id);
        this.onDeleteCategory(result.id);
      }
    });
  }
  onDeleteCategory(id: number) {
    this._CategoriesService.deleteCategory(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.ToastrService.error('error');
      },
      complete: () => {
        this.ToastrService.success('category deleted', 'Success');
        this.getTableData();
      },
    });
  }

  openEditCategory(categoryData: any) {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { categoryName: categoryData.name },
      width: '40%',
    });
    console.log(categoryData.name);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.onEditCategory(categoryData.id, result);
      }
    });
  }
  onEditCategory(id: number, name: string) {
    this._CategoriesService.editCategory(id, name).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('fine');
        this.ToastrService.success('category updated', 'Success');
        this.getTableData();
      },
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageNumber = this.tableResponse?.pageNumber;
    this.pageSize = e.pageSize;
    this.getTableData();
  }
}
