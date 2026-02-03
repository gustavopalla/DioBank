export declare abstract class DioAccount {
    private balance;
    private readonly accountNumber;
    private status;
    private name;
    constructor(accountNumber: number, name: string);
    setName: (name: string) => void;
    getName: () => string;
    deposit: (value: number) => Promise<void>;
    withdraw: (value: number) => void;
    getBalance: () => number;
    private validateStatus;
    showActualBalance: () => void;
}
