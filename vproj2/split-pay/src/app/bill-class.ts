import Group from './group-class';
import User from './user-class';

export default class Bill
{
    billId: number;
    amount: Float32Array;
    title: string;
    description: string;
    date: string;
    group: Group;
    user: User;
}