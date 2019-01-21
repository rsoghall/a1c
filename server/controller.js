let arrayBG = [
    {
        BG: 172,
        A1c: 7.6,
        index: 0
    }
]
let id = 0




module.exports = {
    getBG: (req, res) => {
        console.log(arrayBG)
        res.status(200).send(arrayBG)
    },
    addBG: (req, res) => {
        const index= arrayBG[arrayBG.length-1].index+1

        const newBG = {
            BG: req.body.BG,
            A1c: req.body.A1c,
            index: index
        }
        arrayBG.push(newBG)
        res.status(200).send(arrayBG)
    },
    editBG: (req, res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        let bg=arrayBG(req.params.id)

        arrayBG[updateID]={
            BG: req.body.BG,
            A1c: req.body.A1c,
            index: index
                    };
        res.status(200).send(arrayBG)
    },
    deleteBG: (req, res) => {
        console.log('req id :: ' + req.params.id);
        arrayBG.splice(req.params.id, 1)
        res.status(200).send(arrayBG)

    }
    



}
