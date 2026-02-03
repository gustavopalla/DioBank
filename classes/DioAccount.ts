export abstract class DioAccount {
    private balance: number = 0;
    private readonly accountNumber: number;
    private status: string = 'Ativo'
    private name: string;

    constructor(accountNumber: number, name: string) {
        this.accountNumber = accountNumber;
        this.name = name;
    }

    setName = (name: string) => {
        this.name = name;
        console.log(`O nome do cliente ${this.name} foi alterado para ${name}`);
    }

    getName = () => {
        return this.name;
    }

    deposit = (value: number): boolean => {
        if (this.validateStatus() === 'Inativo') {
            console.log('Conta inativa. Não é possível depositar');
            return false;
        }

        this.balance += value;
        console.log(`Depósito de ${value} realizado com sucesso`);
        return true;
    }

    withdraw = (value: number): boolean => {
        if (this.validateStatus() === 'Inativo') {
            console.log('Conta inativa. Não é possível sacar');
            return false;
        }
        if (value > this.balance) {
            console.log('Saldo insuficiente. Não é possível sacar');
            return false;
        }

        this.balance -= value;
        console.log(`Saque de ${value} realizado com sucesso`);
        return true;
    }

    getBalance = () => {
        return this.balance;
    }

    private validateStatus = (): string => {
        if (this.status === 'Ativo') {
            return 'Ativo'
        }

        throw new Error('Conta inativa ou inválida');

    }

    showActualBalance = () => {
        console.log(`Saldo atual: ${this.balance}`);
    }

};