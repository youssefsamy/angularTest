import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { ItemModalComponent } from "./itemModal/itemModal.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule
    ],
    entryComponents: [
        ItemModalComponent
    ],
    declarations: [
        ItemModalComponent
    ],
    exports: [
        ItemModalComponent
    ],
    providers: [],
})
export class SharedModule {

}