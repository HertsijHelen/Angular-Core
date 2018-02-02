import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule ],
    declarations: [ AppComponent,SearchPipe ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }