const Character = require('./Character');
const Item = require('./Item');


Character.hasMany(Item, {
    foreignKey: 'character_id'
});

Item.belongsTo(Character, {
    foreignKey: 'character_id'
});


module.exports = { Character, Item }