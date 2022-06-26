import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
// import {slider} from '../animations/route-animation';
@Component({
  selector: 'app-logrouter',
  templateUrl: './logrouter.component.html',
  styleUrls: ['./logrouter.component.css'],
  animations: [
    // fader,
    // slider,
    // transformer,
    // stepper
  ]
})
export class LogrouterComponent implements OnInit {

  constructor(private router:Router) { }

  links = ['Login', 'Register'];
  activeLink = this.links[0];

  ngOnInit(): void {
  }

  redirectLogin(){
    console.log("navegando al register");
    this.router.navigate['register'];
  }

  prepareRoute(outlet: RouterOutlet){

  }

}
