import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule,MatBadgeModule} from '@angular/material';
import {MatSelectModule,MatProgressBarModule} from '@angular/material';
import {MatToolbarModule,MatSidenavModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule,MatRadioModule} from '@angular/material';
import {MatCardModule,MatTabsModule,MatInputModule,MatExpansionModule,MatTableModule} from '@angular/material';


const Material=[
  MatButtonModule,MatAutocompleteModule,MatSliderModule,MatFormFieldModule,MatExpansionModule,MatButtonToggleModule,MatBadgeModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatCardModule,MatTabsModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,MatProgressBarModule,MatTableModule
];

@NgModule({

  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
