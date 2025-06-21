import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MemberCreate } from './member-create/member-create';
import { MemberDetail } from './member-detail/member-detail';
import { MemberEdit } from './member-edit/member-edit';


export const routes: Routes = [
    {path: '', title: 'Home', component: Home},
    {path: 'home', title: 'Home', component: Home},
    {path: 'member-create', title: 'Member Create', component: MemberCreate},
    {path: 'member-edit/:id', title: 'Member EDIT', component: MemberEdit},
    {path: 'member-detail/:id', title: 'Member Detail', component: MemberDetail},
];
