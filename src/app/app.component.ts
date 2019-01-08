import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-auth-frontend";
  post;
  constructor(private _auth: AuthService) {
    this._auth.getPost().subscribe(data => {
      this.post = data;
      console.log(this.post);
    });
  }
}
