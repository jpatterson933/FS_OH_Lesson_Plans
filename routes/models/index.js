const Character = require('./Character');
const Item = require('./Item');

/**
 * First we are saying that the Character model can have many instances of the Item model
 *      eg. a character can have a sword, shield, potions, etc.
 * the second argument is an options object where we define the foreign key that brings the Character model and the Item model together
 *      {foreignKey: 'character_id'} <- this is our options model
 *      -- this is the column name in the Item model that references the character_id of the Character model
 * 
 * 
 */

Character.hasMany(Item, {
    foreignKey: 'character_id'
});

/**
 * Here we are describing the inverse relationship
 * we are saying that each Item can only belong to one Character model
 *      For example, if you have one healing potion, it is not possible for two character to have that healing potion at the same time. Only one character can possible have one item
 *      This is similar to how you have a passport. It is not possible for someone else to have your passport. Only you can have that passport.
 * 
 * the second arguemnt in the belongsTo() method is an object where we define a foreign key that associates the two models
 * --> {foreignKey: 'character_id'}
 * This is the column name in the Item model referencing the 'character_id' of the Character model
 *      --basically, we are saying each item will have a character id. This character id lets us know who the item belongs to
 */
Item.belongsTo(Character, {
    foreignKey: 'character_id'
});


module.exports = { Character, Item }