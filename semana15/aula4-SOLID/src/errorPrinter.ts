export class ErrorPrinter {
    printError(messageError: string, date: Date): void {
        throw new Error(`${messageError} - ${date}`)
    }
}