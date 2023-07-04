import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';

import { SwiperModule } from 'swiper/angular';
import { SharedModule } from 'src/app/components/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    OverviewPageRoutingModule,
    SwiperModule,
    SharedModule,
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
