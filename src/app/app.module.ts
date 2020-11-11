import { FormValidatorComponent } from './components/form-validator/form-validator.component';
import { ModalComponent } from './components/modal/modal.component';
import { FirstloginComponent } from './frontoffice/firstlogin/firstlogin.component';
import { ModalModule } from './components/modal/modal.module';
import { DiagnosticComponent } from './frontoffice/diagnostic/diagnostic.component';
import { StorageServices } from './services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { StorageServiceModule } from 'ngx-webstorage-service';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider
} from 'angularx-social-login';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './components/message/message.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { DragAndDropDirective } from './directive/drag-and-drop.directive';
import { StepsComponent } from './components/steps/steps.component';
import { FormStepsComponent } from './components/form-steps/form-steps.component';
import { FormStepsTemplateComponent } from './components/form-steps-template/form-steps-template.component';
import { FormStepsCompleteComponent } from './components/form-steps-complete/form-steps-complete.component';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    SocialLoginModule,
    StorageServiceModule,
    ModalModule
  ],
  declarations: [
    FirstloginComponent,
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    MessageComponent,
    ImageUploaderComponent,
    DragAndDropDirective,
    StepsComponent,
    FormStepsComponent,
    FormStepsTemplateComponent,
    FormStepsCompleteComponent,
    FormValidatorComponent
  ],exports:[
    DragAndDropDirective,
    ModalModule,
    ModalComponent,
    FormValidatorComponent,
    FormStepsComponent,
    FormStepsTemplateComponent,
    FormStepsCompleteComponent
  ],
  providers: [
    StorageServices,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('561602290896109'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
          {
            id: VKLoginProvider.PROVIDER_ID,
            provider: new VKLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
