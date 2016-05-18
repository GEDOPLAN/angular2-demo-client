import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import {CliHeaderComponent} from '../shared/index'
import {DemoService} from '../+service/shared/index'

@Component({
    moduleId: module.id,
    selector: 'app-forms',
    providers: [DemoService],
    directives: [CliHeaderComponent],
    templateUrl: 'forms.component.html',
    styleUrls: ['forms.component.css']
})
export class FormsComponent implements OnInit {

    customer: Rest.Customer = <Rest.Customer>{};

    constructor(current: RouteSegment, private demoService: DemoService) {
        var customerId = current.getParam("id");
        demoService.load(customerId).subscribe(c => this.customer = c);
    }

    ngOnInit() {
    }
    
    submit(){
        this.demoService.saveData(this.customer).subscribe(c => this.customer=c);
    }

}
