import {
  Component,
  OnInit,
  NgZone
} from '@angular/core';
import { OutsideZone } from 'src/app/decorators/out_side_zone.decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
  ) {
  }

  ngOnInit(): void {
  }

  signIn(): void {
    console.log('Sign in');
  }
}
