export class RTLogger {
  constructor(opts) {
    this.logger = [];
    this.verbose = opts.verbose || false;
  }
  log(...args) {
    this.logger.push(args);
    if (this.verbose) {
      console.log(...args);
    }
  }
}

export const rtLogger = new RTLogger({verbose: true});
