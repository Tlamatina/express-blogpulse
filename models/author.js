'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    static associate(models) {
      models.author.hasMany(models.article)
    }
  }
  author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'author',
  })
  return author
}