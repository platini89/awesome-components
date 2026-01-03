import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [ RouterModule, MatToolbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Headercomponent {

}
