import { Component ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterLink , RouterOutlet , RouterLinkActive } from '@angular/router';
import { Swiper } from 'swiper/types';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [RouterLink , HeaderComponent,RouterOutlet , RouterLinkActive ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
 

  

}
