import { Component, Input } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  primaryBtnTxt: string = "";
  secondaryBtnTxt: string = "";

}
