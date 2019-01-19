let arrayBG = [
    {
        BG: 120,
        A1c: 5.8,
        index: 0
    }
]




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
    



}
