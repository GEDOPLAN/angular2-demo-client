import { Component, OnInit } from '@angular/core';
import {CliHeaderComponent} from '../shared/index'

@Component({
    moduleId: module.id,
    selector: 'app-forms',
    directives: [CliHeaderComponent],
    templateUrl: 'forms.component.html',
    styleUrls: ['forms.component.css']
})
export class FormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
