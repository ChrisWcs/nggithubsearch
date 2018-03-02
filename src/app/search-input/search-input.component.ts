import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  value = '';

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  handleClick() {
    this.userService.getUser(this.value).subscribe( data => {
      this.userService.data = data;
      console.log(this.userService.data);
    });
    this.value = '';
  }
}
