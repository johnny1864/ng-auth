import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbar } from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatToolbar],
  exports: [MatButtonModule, MatToolbar]
})
export class MaterialModule {}
