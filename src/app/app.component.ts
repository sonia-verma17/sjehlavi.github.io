import { Component } from '@angular/core';
import { EditTableComponent } from './edit-table/edit-table.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {};
  myDataArray = [
    {
      'id': 1,
      'name': 'Anna Bosh',
      'dob': 'Nov 14, 1974',
      'address': '27 Colored Row',
      'details': 'assets/detailsblue.png',
      'update': 'assets/update-icon.jpg',
      'delete': 'assets/delete-icon.png'

    },
    {
      'id': 2,
      'name': 'John Keen',
      'dob': 'Dec 5, 1980',
      'address': '61, Wellfield Road',
      'details': 'assets/detailsblue.png',
      'update': 'assets/update-icon.jpg',
      'delete': 'assets/delete-icon.png'
    },
    {
      'id': 3,
      'name': 'Martin Miller',
      'dob': 'May 21, 1983',
      'address': '3, Edgar Buildings',
      'details': 'assets/detailsblue.png',
      'update': 'assets/update-icon.jpg',
      'delete': 'assets/delete-icon.png'
    },
    {
      'id': 4,
      'name': 'Nick Somion',
      'dob': 'Dec 15, 1988',
      'address': 'North sunny address 102',
      'details': 'assets/detailsblue.png',
      'update': 'assets/update-icon.jpg',
      'delete': 'assets/delete-icon.png'
    }
  ];

  tableColumns  :  string[] = ['Name', 
                                'Date of Birth', 
                                'Address',
                                'Details',
                                'Update',
                                'Delete'
                              ];

  title = 'tableCRUD';

  ngOnInit() {
  }

  deleteRow(id) {
    this.myDataArray = this.myDataArray.filter(item => item.id !== id);
  }

  updateRow(id) {
    window.alert('Update Operation' + id);
    const dialogConfig = new MatDialogConfig;
    dialogConfig.data = this.myDataArray.filter(item => item.id === id);
    let dialogRef = this.matDialog.open(EditTableComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => 
      {
        this.myDataArray = this.myDataArray.filter((value,key)=>{
          if(value.id == result[0].id){
            value.name = result.name;
            value.dob = result.dob;
            value.address = result.address;
          }
          return true;
        });
      });
  }
}
