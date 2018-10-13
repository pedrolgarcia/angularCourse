import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({ // decorator de componente em angular
  selector: 'jad-root', // seletor que referencia o componente
  templateUrl: './app.component.html' // template do o componente
  // styleUrls: ['./app.component.css'] // estilo do componente
  // template: '<h1>Hello</h1>' // template inline
                /* `<h1>
                      Hello
                    </h1>` */ 
})
export class AppComponent { // classe do componente

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia', isJedi: false }
  ]

  // luke = { name: 'Luke', isJedi: true, temple: 'Coruscant' }
  // han = { name: 'Han Solo', isJedi: false }
  // leia = { name: 'Leia', isJedi: false }
}
