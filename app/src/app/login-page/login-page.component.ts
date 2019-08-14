import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    var linkElement = document.getElementById("link") as HTMLLinkElement;
    if (linkElement !== null && linkElement !== undefined) {
      linkElement.href =
        "https://authentication.azurestaticwebsites.net/.auth/login/google?post_login_redirect_uri=" +
        window.location.href.split("://")[1] + "list";
    }
  }
}
