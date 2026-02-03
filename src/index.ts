import { PeopleAccount } from '../classes/PeopleAccount';
//import { CompanyAccount } from '../classes/CompanyAccount';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const peopleAccount = new PeopleAccount(1, 'Gustavo', 1);

async function main() {
  const rl = readline.createInterface({ input, output });

  const depositValue: number = Number(await rl.question(`Digite o valor do deposito: `));
  if (isNaN(depositValue) || depositValue <= 0) {
    console.log("Erro: Você deve digitar um número válido e maior que zero para o depósito.");
  } else {
    peopleAccount.deposit(depositValue);
  }

  while (true) {
    const withdrawValue: number = Number(await rl.question(`Digite o valor do saque: `));
    if (isNaN(withdrawValue) || withdrawValue <= 0) {
      console.log("Erro: Você deve digitar um número válido e maior que zero para o saque.");
    } else if (peopleAccount.withdraw(withdrawValue)) {
      peopleAccount.showActualBalance();
      break;
    }

  }

  rl.close();
}

main();

