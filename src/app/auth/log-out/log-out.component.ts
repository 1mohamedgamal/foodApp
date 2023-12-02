import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
})
export class LogOutComponent {
  constructor(public dialogRef: MatDialogRef<LogOutComponent>) {}

  // Function to cancel/logout without action
  cancel(): void {
    this.dialogRef.close(false); // Close the dialog without performing logout
  }

  // Function to confirm/logout
  confirm(): void {
    this.dialogRef.close(true); // Close the dialog and confirm logout
  }
}