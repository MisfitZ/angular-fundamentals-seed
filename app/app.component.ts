import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <button (click)="handleClick()"> What is Ellie </button>
        <input type="text" >
        <div>
          <div>{{ name }}
        </div>
      </div>
  `
})
export class AppComponent {
  name: string = '';

  handleClick(){
    this.name += 'Ellianna is a turd'
    
  }
  
}