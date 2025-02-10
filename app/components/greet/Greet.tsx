type GreetProps = {
    name?: string;
};
export default function Greet({ name }: GreetProps) {
    if (name) return <h1 data-testid="greeting">Hello {name} </h1>;

    return <button data-testid="login-button">Login</button>;
}
