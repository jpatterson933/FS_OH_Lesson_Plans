const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        health: {
            type: DataTypes.INTEGER
        },
        strength: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        is_hero: {
            type: DataTypes.BOOLEAN
        },
        weaknesses: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character'
    }
);

module.exports = Character;