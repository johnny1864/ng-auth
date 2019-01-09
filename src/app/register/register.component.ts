import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  user = {
    email: "",
    password: ""
  };
  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  registerUser() {
    console.log(this.user);
    this._auth.registerUser(this.user);
  }
}
