import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { PageOneComponent } from '@pages/page-one/page-one.component';
import { PageThreeComponent } from '@pages/page-three/page-three.component';
import { PageTwoComponent } from '@pages/page-two/page-two.component';

const routes: Routes = [{
    path: '',
    component: MainComponent,
    children: [
        {
          path: 'home',
          component: DashboardComponent,
          data:{
              title:"首页"
          }
        },
        {
          path: 'level1',
          children:[
            {
              path:'leve2',
              data:{
                  title:"2级菜单标题"
              },
              component: PageOneComponent
            },
            {
              path:'leve2-2',
              children:[
                {
                  path:'leve3',
                  data:{
                    title:"3级菜单标题"
                  },
                  component: PageTwoComponent
                },
                {
                  path:'leve3/inner-page',
                  data:{
                    title:"3级菜单-子页面"
                  },
                  component: PageThreeComponent
                }
              ]
            }
          ]
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }