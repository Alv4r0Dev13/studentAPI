const { Sequelize } = require('sequelize');
module.exports = {
  dialect: 'sqlite',
  host: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  }
};
