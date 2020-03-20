# Angular Animate
Animation provides the illusion of motion: HTML elements change styling over time. Well-designed animations can make your application more fun and easier to use
[See more](https://angular.io/guide/animations)

## Setup Animation
Before making an animation, it BrowserAnimationsModulemust be included in the imports array of the root module

```ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

imports: [
  // ...
  BrowserAnimationsModule
],

```

## Animation method
Angular animation uses a series @angular/animationsof methods:
  - trigger (selector: string, AnimationMetadata[])
  - state (data: string, AnimationStyleMetadata, options?: object)
  - style (CSSKeyValues: object)
  - animate (timing: string|number, AnimationStyleMetadata|KeyframesMetadata)
  - translation (stateChange: string, AnimationMetadata|AnimationMetadata[], options?: object)

[Other methods](https://angular.io/api/animations)

### Trigger
 
Its role is similar to attribute directives in component templates.
 It essentially connects the animated elements to the template via the attribute selector.

 ### state
The first parameter matches the value of the data bound to the animation binding.
The second parameter carries the CSS styles that apply to the animated element
```html
[@divState]="state"
 ```


```ts

state('normal', style({
  'background-color': 'red', transform: 'translateX(0)' // CSS styles
})),

// ...

this.state = 'normal' // <= to change state
```

### Style 

 Objects containing CSS styles represent their parameters

 ### Animate 

 The function accepts a timing expression as its first argument [See more](https://angular.io/api/animations/animate#usage)


 ## Animation example

```ts

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
  // transition('shrunken <=> *', animate(500, style({borderRadius: '50px'}))),
  transition('shrunken <=> *', [
    style({'background-color': 'orange'}),
    animate(1000)
  ]),
]),

```



```html

<div [@divState]="state" />

```
