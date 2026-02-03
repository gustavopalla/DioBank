import { DioAccount } from './DioAccount';
export declare class CompanyAccount extends DioAccount {
    constructor(accountNumber: number, name: string);
    getLoan: () => void;
}
