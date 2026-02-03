import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {

    constructor(accountNumber: number, name: string) {
        super(accountNumber, name);
    }

    getLoan = () => {
        console.log('Emprestimo concedido');
    }
}
