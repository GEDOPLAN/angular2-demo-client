import { Component, OnInit } from '@angular/core';
import {CliHeaderComponent} from '../shared/index'

@Component({
    moduleId: module.id,
    selector: 'app-service',
    directives: [CliHeaderComponent],
    templateUrl: 'service.component.html',
    styleUrls: ['service.component.css']
})
export class ServiceComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
