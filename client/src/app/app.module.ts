import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { EnclouserDetailsComponent } from 'src/components/enclouser-details/enclouser-details.component';
import { FarmDetailsComponent } from 'src/components/farm-details/farm-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderSpinnerModule } from 'ngx-loader-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnclouserDetailsComponent,
    FarmDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoaderSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
