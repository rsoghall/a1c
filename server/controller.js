let arrayBG = [
    {
        BG: 120,
        A1c: 5.8
    }
]




module.exports = {
    getBG: (req, res) => {
        console.log(a1cResult)
        res.status(200).send(a1cResult)
    },
    addBG: (req, res) => {
        const index= arrayBG[arrayBG.length-1].index+1

    }



}
