const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'johndoe123@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mary Doe',
          email: 'marydoe123@email.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Billy Doe',
          email: 'billydoe123@email.com',
          password_hash: await bcryptjs.hash('147258', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  async down() { }
};
