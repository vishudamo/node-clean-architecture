export abstract class Mapper<Input, Output> {
    abstract mapFrom(param: Input): Output;
    abstract mapTo(param: Output): Input;
}