import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  imageUrl?:string="";

  constructor() {
    this.imageUrl = "https://www.dunp.np.ac.rs/wp-content/uploads/2022/09/logo_plavi-cirilica-206x56.png"
  }

  changeLogo(input:HTMLInputElement) {
    input.value ? this.imageUrl = input.value : "";
  }
}
