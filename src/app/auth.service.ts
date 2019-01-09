import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(user) {
    console.log(user);
    return this.http
      .post(`http://localhost:5000/register`, user)
      .subscribe(data => console.log(data));
  }
}
