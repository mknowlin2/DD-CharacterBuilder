import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dd-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title : string = 'D&D Builder App';

  constructor() { }

  ngOnInit() {
  }

}
