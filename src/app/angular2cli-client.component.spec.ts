import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2cliClientAppComponent } from '../app/angular2cli-client.component';

beforeEachProviders(() => [Angular2cliClientAppComponent]);

describe('App: Angular2cliClient', () => {
  it('should create the app',
      inject([Angular2cliClientAppComponent], (app: Angular2cliClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2cli-client works!\'',
      inject([Angular2cliClientAppComponent], (app: Angular2cliClientAppComponent) => {
    expect(app.title).toEqual('angular2cli-client works!');
  }));
});
