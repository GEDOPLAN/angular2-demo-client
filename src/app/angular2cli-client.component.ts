import { Component } from '@angular/core';
import {CliHeaderComponent} from './shared'
import { Routes } from '@angular/router';
import { ServiceComponent } from './+service';
import { FormsComponent } from './+forms';
import { HomeComponent } from './+home';

@Component({
    moduleId: module.id,
    directives: [CliHeaderComponent],
    selector: 'angular2cli-client-app',
    templateUrl: 'angular2cli-client.component.html',
    styleUrls: ['angular2cli-client.component.css']
})
@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/service', component: ServiceComponent },
    { path: '/forms/:id', component: FormsComponent }
])
export class Angular2cliClientAppComponent {
    title = 'angular2cli-client works!';
}
