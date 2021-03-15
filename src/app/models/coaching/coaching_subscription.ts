import { CoachingDuration } from './coaching_duration';
import { CoachingGoal } from './coaching_goal';
import { User } from './../main/user';
import { Chat } from './../main/chat'

export class CoachingSubscription {
    id: string;

    descriptions: string;

    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;

    goal: CoachingGoal = new CoachingGoal();
    duration: CoachingDuration = new CoachingDuration();
    user: User = new User();
    coach: User = new User();
    chat: Chat = new Chat()
    
    constructor() {
    }
}
