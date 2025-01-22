const users = [
    {
        id: 'token 1',
        email: "atapas@email.com",
        password: "password"
    },
    {
        id: 'token 2',
        email: "alex@email.com",
        password: "password"
    },
    {
        id: 'token 3',
        email: "bob@email.com",
        password: "password"
    }
]

export const getUserByEmail = (email: any) => {
    const found = users.find(user => user.email === email);
    return found;
}