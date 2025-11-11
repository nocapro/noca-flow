import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { handleStateCommand } from './commands/state';

// TODO: Set up yargs to handle commands and options.
// 'init' command: Initializes a nocaflow project. (Implementation pending)
// 'state' command: Displays the current state of the project.

yargs(hideBin(process.argv))
  .command('init', 'Initialize a nocaflow project in the current directory',
    () => {},
    (argv) => console.log('// TODO: Implement init command logic.')
  )
  .command('state', 'Display the current state of the nocaflow project',
    () => {},
    handleStateCommand
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;