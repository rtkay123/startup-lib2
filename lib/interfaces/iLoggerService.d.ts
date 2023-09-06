export interface ILoggerService {
    log: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string | Error) => void;
}
