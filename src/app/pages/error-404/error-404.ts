import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [RouterLink, LottieComponent],
  templateUrl: './error-404.html',
  styleUrls: ['./error-404.css']
})
export class Error404 { // Clase renombrada para coincidir con rutas
  options: AnimationOptions = {
    path: '/assets/animations/data404.json',
  };
}