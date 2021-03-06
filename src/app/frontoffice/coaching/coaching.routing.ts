import { ProgramEnrollmentComponent } from './../../backoffice/coaching-backoffice/program-enrollment/program-enrollment.component';

import { ClientBoardComponent } from './client-board/client-board.component';


import { Routes } from '@angular/router';
import { CoachingDashboardComponent } from './coaching-dashboard/coaching-dashboard.component';

export const CoachingRoutes: Routes = [
    {
        path: '', component: CoachingDashboardComponent
    },
    {
        path: 'board/:id', component: ClientBoardComponent
    },
    {
        path: 'program-enrolling/:id', component: ProgramEnrollmentComponent
    }
]; 