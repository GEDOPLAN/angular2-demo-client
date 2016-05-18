import { Component, OnInit} from '@angular/core';
import {CliHeaderComponent} from '../shared/index'
import {DemoService} from './shared/index'

@Component({
    moduleId: module.id,
    selector: 'app-service',
    directives: [CliHeaderComponent],
    providers: [DemoService],
    templateUrl: 'service.component.html',
    styleUrls: ['service.component.css']
})
export class ServiceComponent implements OnInit {

    constructor(public demoService: DemoService) { }

    customers:any;
    
    ngOnInit() {
        this.demoService.getData().subscribe(customers => this.customers=customers);
    }
}
