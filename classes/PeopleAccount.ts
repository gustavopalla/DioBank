import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
    private idcpf: number;

    constructor(idcpf: number, name: string, accountNumber: number) {
        super(accountNumber, name);
        this.idcpf = idcpf;
    }
}