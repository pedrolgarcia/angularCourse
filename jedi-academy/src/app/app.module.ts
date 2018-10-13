// módulo raiz do nosso projeto, ele será carregado pelo main.ts e será o bootstrap da nossa aplicação
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';

@NgModule({ // decorator de módulo em angular - insere metadados em classes, atributos, métodos e parâmetros de métodos
  declarations: [ // aqui declaramos todos os componentes, pipes e diretivas que serão usados pelo módulo
    AppComponent, HeaderComponent, StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // componente de bootstrap (principal) do módulo
})
export class AppModule { }
