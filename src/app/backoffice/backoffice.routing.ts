import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { DeleteQuizComponent } from './quiz/delete-quiz/delete-quiz.component';
import { DetailsQuizComponent } from './quiz/details-quiz/details-quiz.component';
import { ListQuizComponent } from './quiz/list-quiz/list-quiz.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { DetailsCourseComponent } from './courses/details-course/details-course.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { CreateProfessionalExperienceComponent } from './professional-experience/create-professional-experience/create-professional-experience.component';
import { UpdateProfessionalExperienceComponent } from './professional-experience/update-professional-experience/update-professional-experience.component';
import { ListProfessionalExperienceComponent } from './professional-experience/list-professional-experience/list-professional-experience.component';
import { CreateWorkSituationComponent } from './workSituation/create-work-situation/create-work-situation.component';
import { UpdateWorkSituationComponent } from './workSituation/update-work-situation/update-work-situation.component';
import { ListWorkSituationComponent } from './workSituation/list-work-situation/list-work-situation.component';
import { UpdateAcademicLevelComponent } from './academic-level/update-academic-level/update-academic-level.component';
import { ListAcademicLevelComponent } from './academic-level/list-academic-level/list-academic-level.component';
import { CreateAcademicLevelComponent } from './academic-level/create-academic-level/create-academic-level.component';
import { UpdateCategoryBudgetComponent } from './budgetCategory/update-category-budget/update-category-budget.component';
import { ListCategoryBudgetComponent } from './budgetCategory/list-category-budget/list-category-budget.component';
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component';
import { UpdateEvaluationComponent } from './evaluation/update-evaluation/update-evaluation.component';
import { ListEvaluationComponent } from './evaluation/list-evaluation/list-evaluation.component';
import { DetailsUserComponent } from './user/details-user/details-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateCategoryBudgetComponent } from './budgetCategory/create-category-budget/create-category-budget.component';
import { CoachingComponent } from './coaching-backoffice/coaching/coaching.component';


const backOfficeRoutes: Routes = [

    
    { path: 'users',                 component: ListUserComponent },
    { path: 'users/create',          component: CreateUserComponent },
    { path: 'users/update/:id',      component: UpdateUserComponent },
    { path: 'users/delete/:id',      component: DeleteUserComponent },
    { path: 'users/details/:id',     component: DetailsUserComponent },

    { path: 'evaluations',            component: ListEvaluationComponent},
    { path: 'evaluations/create',     component: CreateEvaluationComponent },
    { path: 'evaluations/update/:id', component: UpdateEvaluationComponent },
    { path: 'evaluations/delete/:id', component: DeleteUserComponent },
    { path: 'evaluations/details/:id',component: DetailsUserComponent },

    { path: 'budget-categories',            component: ListCategoryBudgetComponent},
    { path: 'budget-categories/create',     component: CreateCategoryBudgetComponent },
    { path: 'budget-categories/update/:id', component: UpdateCategoryBudgetComponent },

    { path: 'academic-levels',              component: ListAcademicLevelComponent},
    { path: 'academic-levels/create',       component: CreateAcademicLevelComponent},
    { path: 'academic-levels/update/:id',   component: UpdateAcademicLevelComponent},

    { path: 'work-situations',               component: ListWorkSituationComponent},
    { path: 'work-situations/create',        component: CreateWorkSituationComponent},
    { path: 'work-situations/update/:id',    component: UpdateWorkSituationComponent},

    { path: 'professional-experiencies',            component: ListProfessionalExperienceComponent},
    { path: 'professional-experiencies/create',     component: CreateProfessionalExperienceComponent},
    { path: 'professional-experiencies/update/:id', component: UpdateProfessionalExperienceComponent},

    { path: 'quizes',                          component: ListQuizComponent},
    { path: 'quizes/create',                   component: CreateQuizComponent},
    { path: 'quizes/update/:id',               component: UpdateQuizComponent},
    { path: 'quizes/delete/:id',               component: DeleteQuizComponent},
    { path: 'quizes/details/:id',              component: DetailsQuizComponent},

    { path: 'courses',                         component: ListCourseComponent},
    { path: 'courses/create',                  component: CreateCourseComponent },
    { path: 'courses/update/:id',              component: UpdateCourseComponent },
    { path: 'courses/delete/:id',              component: DeleteUserComponent },
    { path: 'courses/details/:id',             component: DetailsCourseComponent },
    
    {
      path: 'coaching',
      component: CoachingComponent,
      children: [
        {
          path: '',
          loadChildren: './coaching-backoffice/coaching-backoffice.module#CoachingBackofficeModule'
        }]
    }
];

@NgModule({
    imports:[RouterModule.forChild(backOfficeRoutes)],
    exports:[RouterModule]
})

export class BackOfficeRoutes{}