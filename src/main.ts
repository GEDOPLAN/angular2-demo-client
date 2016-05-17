import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { Angular2cliClientAppComponent, environment } from './app/';

if (environment.production) {
    enableProdMode();
}

bootstrap(Angular2cliClientAppComponent, [
    ROUTER_PROVIDERS
]);
