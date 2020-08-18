import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from "@ngrx/store";
import * as Cart from "../store/actions";
import { AddToFvrtDialogComponent } from '../add-to-fvrt-dialog/add-to-fvrt-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.scss']
})
export class SearchImagesComponent implements OnInit {

  response: any;
  lists: any;
  queryString: any;
  searchQuery: any;
  storeValues: any;
  disableBtn: boolean = false;

  constructor(private _snackBar: MatSnackBar, private service: ImagesService, private store: Store<{ items: any; cart: [] }>, private dialog: MatDialog) { }

  ngOnInit() {
    this.retrieveImages();
  }
  retrieveImages() {
    this.store.select('cart').subscribe(data => {
      this.storeValues = data;
      if (data['item'].length != 0) {
        this.searchQuery = data['item'][0].queryString;
        this.response = data['item'][0].items;
      }
    })
  }
  searchImage(query) {
    this.store.dispatch(new Cart.LoadItems({ queryString: query }));
    this.retrieveImages();
  }
  authorPage(image) {
    if (image.user.portfolio_url != null) {
      window.open(image.user.portfolio_url);
    } else {
      alert("author details not available")
    }
  }
  addSelected(product) {
    const dialogRef = this.dialog.open(AddToFvrtDialogComponent, {
      width: '500px',
      height: '200px',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this._snackBar.openFromComponent(snackBarComponent, {
        duration: 2000,
      });
    });
  }

  onhover(obj) {
    this.retrieveImages();
    if (this.storeValues['cart'].length != 0) {
      this.disableBtn = this.storeValues['cart'].forEach((item) => {
        if (JSON.stringify(item.value) === JSON.stringify(obj)) {
          return true;
        } else {
          return false;
        }
      })
    }
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="snaBar">
                List Added Successfully!
              </span>`,
  styles: [`
    .snaBar {
      color: #b3c2de;
    }
  `],
})
export class snackBarComponent { }
