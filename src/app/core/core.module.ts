import { NgModule , SkipSelf, Optional} from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../util/svg.util';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from '../login/login.module';

import 'hammerjs';
import 'rxjs/add/operator/take';

/*
* core 模块只在系统中加载一次
*/

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
     FooterComponent,
     SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  providers: [
    {provide: 'BASE_CONFIG', useValue: 'http://localhost:3000'}
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) { // optional可选的  // 在父级依赖中寻找依赖，避免无尽循环
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);
  }
 }
