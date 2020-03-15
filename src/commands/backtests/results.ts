import { BaseCommand } from '../../BaseCommand';
import { createBacktestFlag, createProjectFlag, selectBacktest, selectProject } from '../../utils/command';

export default class ShowBacktestResultsCommand extends BaseCommand {
  public static description = 'show the results of a given backtest';

  public static flags = {
    ...BaseCommand.flags,
    ...createProjectFlag(),
    ...createBacktestFlag(),
  };

  protected async execute(): Promise<void> {
    const project = await selectProject(this.flags);
    const backtest = await selectBacktest(project.projectId, this.flags);

    // TODO(jmerle): Implement
  }
}
