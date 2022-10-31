import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isOpened: boolean = false;

  //@Input() menuList: Menu;
  menuList: Observable<Menu[]>;
  constructor() { }
  ngOnInit() {
    //this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }
}
