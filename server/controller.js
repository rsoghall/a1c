let arrayBG = [
    {
        BG: 120,
        A1c: 5.8,
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
        const bgIndex = arrayBG.findIndex(bg=> bg.id == updateID);
        let bg=arrayBG[bgIndex];

        arrayBG[bgIndex]={
            BG: req.body.BG,
            A1c: req.body.A1c,
            index: index
            // id: bg.id,
            // text: text || bg.text,
            // time: bg.time
        };
        res.status(200).send(arrayBG)
    },
    deleteBG: (req, res) => {
        const deleteID = req.params.id;
        bgIndex=arrayBG.findIndex(bg => bg.id == deleteID);
        arrayBG.splice(bgIndex, 1)
        res.status(200).send(arrayBG)

    }
    



}
