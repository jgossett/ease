import * as Logger from 'bunyan';
import { createLogger, Stream } from 'bunyan';
import * as DebugStream from 'bunyan-debug-stream';
import * as PrettyStream from 'bunyan-prettystream';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export class LoggerFactory {
  private readonly logsFolderPath = join(__dirname, '../../../logs/');
  private readonly desktopLogFilePath = join(this.logsFolderPath, 'desktop.log');

  build(): Logger {
    this.createLogsFolder();

    const logger = createLogger({
      name: 'default',
      streams: [
        this.createRawStream(),
        this.createAllRotatingFileStream(),
      ],
      serializers: DebugStream.serializers
    });

    return logger;
  }

  private createLogsFolder(): void {
    // skip if folder already exists.
    if (existsSync(this.logsFolderPath)) {
      return;
    }

    mkdirSync(this.logsFolderPath);
  }

  private createAllRotatingFileStream(): Stream {
    return {
      level: 'debug',
      type: 'rotating-file',
      path: this.desktopLogFilePath,
      period: '1d'
    };
  }

  private createRawStream(): Stream {
    return {
      level: 'debug',
      type: 'raw',
      stream: this.createPrettyStream()
    };
  }

  private createPrettyStream(): PrettyStream {
    const prettyStream = new PrettyStream();
    prettyStream.pipe(process.stdout);

    return prettyStream;
  }
}
