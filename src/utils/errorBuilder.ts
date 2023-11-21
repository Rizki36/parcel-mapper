class ErrorBuilder {
  public static buildError(code: number, message: string): Error {
    const error = new Error(message);
    error.name = code.toString();
    return error;
  }
}
