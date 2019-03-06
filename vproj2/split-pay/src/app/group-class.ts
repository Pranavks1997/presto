import User from './user-class';

// import { User } from './user-class';

export default class Group
{
    groupId: number;
    groupName: string;
    list: Array<User>;
}