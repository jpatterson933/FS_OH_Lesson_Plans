const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
    {
        item_id: {
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
        effects: {
            type: DataTypes.JSON
        },
        description: {
            type: DataTypes.STRING
        },
/**
 * references = this defines the foreign key relationship between the Item model and the Character model
 * 
 *      -- model: 'character' = this specifies the name of the referenced model, which is 'character' in this case. 
 *          it MUST match the modelName that is given at the end of the model where you define freezeTableName
 * 
 *      -- key: 'character_id': This indicates the column in the model that we just referenced. 
 * 
 *          -- basically, each character will have an id that we have defined under 'character_id' 
 * 
 *              -- now we are saying each Item instance will have a   'character_id' from a character that exists (aka Goku). 
 *                  So if we have our character Goku with an id of 1 and we have a potion here that also has a character_id of 1 
 *                     we are saying that this potion belongsTo() Goku!
 * 
 * 
 */
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'character',
                key: 'character_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item'
    }
);

module.exports = Item;


/**
 * 
 * 
 * 
 * 
| character_id | name    | type   | health | strength | defense | is_hero | weaknesses                       |
|--------------|---------|--------|--------|----------|---------|---------|----------------------------------|
| 1            | Warrior | Human  | 100    | 20       | 10      | true    | { "fire": "weak", "ice": "none" } |
| 2            | Mage    | Human  | 80     | 10       | 5       | true    | { "fire": "none", "ice": "weak" } |
| 3            | Goblin  | Goblin | 50     | 15       | 8       | false   | { "fire": "weak", "ice": "none" } |


| item_id | name       | type   | effects                        | description        | character_id |
|---------|------------|--------|--------------------------------|--------------------|--------------|
| 1       | Sword      | Weapon | { "attack": 10, "defense": 0 } | A sharp sword       | 1            |
| 2       | Shield     | Armor  | { "attack": 0, "defense": 5 }  | A sturdy shield     | 1            |
| 3       | Staff      | Weapon | { "attack": 5, "defense": 2 }  | A magical staff     | 2            |
| 4       | Potion     | Other  | { "healing": 20 }              | Restores health     | 2            |
| 5       | Bow        | Weapon | { "attack": 8, "defense": 1 }  | A ranged weapon     | 3            |




 */