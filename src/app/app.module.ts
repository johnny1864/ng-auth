import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthService } from "./auth.service";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [{ path: "register", component: RegisterComponent }];

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
