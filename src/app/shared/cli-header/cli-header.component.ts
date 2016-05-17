import { Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-cli-header',
    templateUrl: 'cli-header.component.html',
    styleUrls: ['cli-header.component.css']
})
export class CliHeaderComponent implements OnInit {

    constructor() { }

    @Input("header-text")
    headerText: string = "undefined";

    ngOnInit() {
    }

}
