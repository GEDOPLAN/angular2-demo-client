import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { Angular2cliClientAppComponent, environment } from './app/';

if (environment.production) {
    enableProdMode();
}

bootstrap(Angular2cliClientAppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true}),
    provide("RESTURL", { useValue: environment.webserviceURL}),
    
]);
