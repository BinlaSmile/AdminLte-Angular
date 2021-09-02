import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "@pages/dashboard/dashboard.component";

import { ContentHeaderComponent } from "./content-header/content-header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MessagesDropdownMenuComponent } from "./header/messages-dropdown-menu/messages-dropdown-menu.component";
import { NotificationsDropdownMenuComponent } from "./header/notifications-dropdown-menu/notifications-dropdown-menu.component";
import { UserDropdownMenuComponent } from "./header/user-dropdown-menu/user-dropdown-menu.component";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { MenuSidebarComponent } from "./menu-sidebar/menu-sidebar.component";
import { MenuSidebarDirective } from "./menu-sidebar/menu-sidebar.directive";
import { PageOneComponent } from "@pages/page-one/page-one.component";
import { PageTwoComponent } from "@pages/page-two/page-two.component";
import { PageThreeComponent } from "@pages/page-three/page-three.component";

@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        MenuSidebarDirective,
        ContentHeaderComponent,
        MessagesDropdownMenuComponent,
        NotificationsDropdownMenuComponent,
        UserDropdownMenuComponent,
        DashboardComponent,
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ]
  })
export class MainModule { }