import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone:true,
})
export class DashboardComponent {

  dashoboarshow= false;

}