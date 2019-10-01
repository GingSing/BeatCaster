let beatMap = {
    notes: [{
            time: 1000
        },
        {
            time: 1500
        },
        {
            time: 2000
        },
        {
            time: 2500
        },
        {
            time: 3000
        },
        {
            time: 3500
        }
    ]
}

let gameState = {
    generatedObjects: [],
    beatNum: 0,
    currentBeatNum: 0,
    currentShownNum: 0,
    score: 0
}

const increaseBeatNum = () => {
    gameState.currentBeatNum++;
}