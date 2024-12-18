import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './interceptor/custom.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {

  providers: [importProvidersFrom(ToastrModule.forRoot(), BrowserAnimationsModule), provideHttpClient(withInterceptors([customInterceptor])) ,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
