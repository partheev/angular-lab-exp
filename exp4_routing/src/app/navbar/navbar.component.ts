import { Component } from '@angular/core';

interface RoutePath {
  name: string
  path : string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  routes :RoutePath[] =[
    {
      name:'Home',
      path:'/home'
    },
    {
      name:'Features',
      path:'/features'
    },
    {
      name:'About Us',
      path:'/about-us'
    },
    {
      name:'Contact',
      path:'/contact'
    },
  ]

}
