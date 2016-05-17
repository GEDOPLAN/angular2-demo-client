import { Component, OnInit } from '@angular/core';
import {CliHeaderComponent} from '../shared/index'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  directives: [CliHeaderComponent],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
