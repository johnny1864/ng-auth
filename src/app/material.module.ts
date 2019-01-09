import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule]
})
export class MaterialModule {}
