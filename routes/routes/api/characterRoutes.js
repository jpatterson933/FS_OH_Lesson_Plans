const router = require('express').Router();
const Character = require('../../models/Character');



router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll();
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err)
    }
});



router.post('/create_character', async (req, res) => {
    try {
        const characterData = await Character.create(req.body);
        res.status(200).json(characterData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const characterData = await Character.destroy({
            where: {
                character_id: req.params.id
            }
        })

        if (!characterData) {
            res.status(404).json({ message: "Can't delete what does not exist" })
            return;
        }
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err)
    }
});


router.put('/:id', async (req, res) => {
    try {
        const characterData = await Character.update(req.body,
            {
                where: {
                    character_id: req.params.id
                }
            }


        )
        if (!characterData) {
            res.status(404).json({ message: "Can't delete what does not exist" })
            return;
        }

        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router;