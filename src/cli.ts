import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { handleStateCommand } from './commands/state';
import { handleInitCommand } from './commands/init';

yargs(hideBin(process.argv))
  .command(
    'init',
    'Initialize a nocaflow project in the current directory',
    () => {},
    handleInitCommand,
  )
  .command('state', 'Display the current state of the nocaflow project',
    () => {},
    handleStateCommand
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;