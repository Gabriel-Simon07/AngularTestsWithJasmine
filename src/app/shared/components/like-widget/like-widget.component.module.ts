import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../services/uniqueId/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

@NgModule({
  declarations: [LikeWidgetComponent],
  exports: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [UniqueIdService]
})
export class LikeWidgetModule {

}
