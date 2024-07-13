class User {
    constructor() {
      this.users = [];
    }
  
    getAllUsers() {
      return this.users;
    }
  
    createUser(user) {
      this.users.push(user);
      return user;
    }
  
    getUserById(id) {
      return this.users.find(u => u.id === id);
    }
  
    updateUser(id, updatedUser) {
      const index = this.users.findIndex(u => u.id === id);
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...updatedUser };
        return this.users[index];
      }
      return null;
    }
  
    deleteUser(id) {
      const index = this.users.findIndex(u => u.id === id);
      if (index !== -1) {
        return this.users.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  module.exports = User;