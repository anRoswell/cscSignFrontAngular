import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LoadingComponent, MessageComponent, FooterComponent],
  imports: [CommonModule, CommonsRoutingModule],
})
export class CommonsModule {}
