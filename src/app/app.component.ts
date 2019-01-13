import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ItemModalComponent } from "./shared/itemModal/itemModal.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testNgApp';

  data = [
    { id: 12, title: 'Paris', color: '#d14853', text: 'Some Long Text sdfs sdf sd fwe fwe fw efwe fwe fw ef wef wef' },
    { id: 111, title: 'New York', color: 'green', text: 'Some Long Text' },
    { id: 199, title: 'Zurich', color: 'yellow', text: 'Some Long Text' },
    { id: 214, title: 'Barcelona', color: 'blue', text: 'Some Long Text' },
  ]

  selectedIndex = -1;

  constructor(
    public dialog: MatDialog
  ) {
    this.selectedIndex = 0;

  }

  add() {
    let dialogRef = this.dialog.open(ItemModalComponent, {
      width: '500px',
      disableClose: true,
      data: {
        mode: 'new',
        item: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.type == 'ok') {
        this.data.push(result.data);
      }
    });
  }

  edit(index) {
    let dialogRef = this.dialog.open(ItemModalComponent, {
      width: '500px',
      disableClose: true,
      data: {
        mode: 'edit',
        item: this.data[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.type == 'ok') {
        this.data[index] = Object.assign({}, result.data);
      }
    });

  }

  remove(index) {
    this.data.splice(index, 1);
  }

}
