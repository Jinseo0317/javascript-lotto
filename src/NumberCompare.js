const InputWinningNumber = require("./InputWinninNumber");
const CreateRandomLotto = require("./CreateRandomLotto");

class NumberCompare{
    constructor(){
        this.inputWinningNumber = new InputWinningNumber();
        this.createRandomLotto = new CreateRandomLotto();
        this.lottoRanking = [0, 0, 0, 0, 0];
    }

    lottoResults(){
        this.matchThreeNumbers(createNum,winningNum);
        this.lottoRanking;
    }

    matchThreeNumbers(createNum, winningNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        if(duplicateNum.length == 3){
            this.lottoRanking[0] += 1;
        }
    }
}




module.exports = NumberCompare;