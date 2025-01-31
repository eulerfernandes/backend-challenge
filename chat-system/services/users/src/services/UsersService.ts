class UsersService {
  private static users = [
    { id: "1", name: "João", email: "joao@email.com" },
    { id: "2", name: "Maria", email: "maria@email.com" },
  ];

  static async getAllUsers() {
    return this.users;
  }

  static async getUserById(id: string) {
    return this.users.find((user) => user.id === id) || null;
  }
}

export default UsersService;
