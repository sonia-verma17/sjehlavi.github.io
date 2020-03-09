import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {

  local_data: any;

  constructor(private dialogRef: MatDialogRef<EditTableComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.local_data = {...data}
    }
  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close({result: this.local_data})
  }
}
