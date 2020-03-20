import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

//Animations are just the jorney from one state to the next

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState',[
      state('normal', style({
        'background-color': 'red', transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue', transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
        // transition('highlighted => normal', animate(1000))
    ]),

    trigger('wildState',[
      state('normal', style({
        'background-color': 'red', transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue', transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green', transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(100)),
      transition('shrunken <=> *', animate(500)),
    ])
  ]
})
export class AppComponent {
	list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState=  'normal'

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate(){
    this.state == 'normal'?this.state='highlighted':this.state='normal';
      this.wildState == 'normal'?this.wildState='highlighted':this.wildState='normal';
  }


  onShrink(){
  this.wildState = 'shrunken'
  }
}
