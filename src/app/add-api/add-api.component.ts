import { Component } from '@angular/core';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.scss']
})
export class AddApiComponent {
privateURL = true;
github = false;
toggle_private(){
  this.github = true;
  this.privateURL = false;
}
toggle_github(){
  this.github = false;
  this.privateURL = true;
}
}
