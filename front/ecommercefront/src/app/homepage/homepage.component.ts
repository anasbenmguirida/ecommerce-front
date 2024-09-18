import { Component ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterLink , RouterOutlet , RouterLinkActive } from '@angular/router';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [RouterLink , RouterOutlet , RouterLinkActive ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
 

  

}
