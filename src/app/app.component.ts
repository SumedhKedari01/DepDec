import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,NavbarComponent,FooterComponent,ContactComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DepDec';
}
