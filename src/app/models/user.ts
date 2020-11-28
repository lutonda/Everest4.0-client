import { EvaluationRequest } from './evaluation-request';
import { Evaluation } from './evaluation';
import { SocialUser } from 'angularx-social-login';
import { Role } from './role';

export class User {
    id: string;
    username: string;
    code: string;
    firstName: string;
    lastName: string;
    othersName: string;
    fullName: string;
    email: string;
    telePhone: number;
    apikey: string;

    password: string;

    photoUrl: string;
    provider: string = 'LOCAL';
    roleId: string;
    role: Role = new Role();

    evaluators: Array<Evaluation> = []
    evaluations: Array<Evaluation> = []
    evaluationRequestes: Array<EvaluationRequest> = []
    evaluationRequested: Array<EvaluationRequest> = []

    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;



    /*constructor(description?: string) {
        this.description = description;
    }*/
    castSocialUser(user: SocialUser) {
        this.firstName = user.name.split(' ')[0]
        this.lastName = user.name.split(' ').slice(-1).pop()
        this.email = user.email
        this.photoUrl = user.photoUrl
        this.apikey = user.authToken
        this.provider = user.provider


        return this;
    }

    get ownRole(){
        debugger
        return [{name:this.roleId,icon:'pe-7s-medal',color:'bg-warning'},
        {name:this.roleId,icon:'pe-7s-delete-user',color:'bg-default'},][this.roleId=='FREE' ? 0 : 1]
    }
    set passw(p: string) {
        this.password = p + '~'
    }

    get avatar(){
        return this.photoUrl
    }
}