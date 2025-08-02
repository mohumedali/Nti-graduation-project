import { Component, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          })
        ], { optional: true }),

        group([
          query(':leave', [
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(20%)', opacity: 0 }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})


export class App {
  protected readonly title = signal('portfolio');
    prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
