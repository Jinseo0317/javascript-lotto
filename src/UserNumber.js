const {Console} = require("@woowacourse/mission-utils");
const CreateRandomLotto = require("./CreateRandomLotto")
const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요."

class UserInputNumber {
    constructor(){
        this.createRandomLotto = new CreateRandomLotto();
    }
    
    userLottoPaymentAmount(){
        Console.readLine( INPUT_MONEY_MESSAGE , (input) => {
            let issuedLotto = input/1000;
            Console.print(issuedLotto + "개를 구매했습니다.");
            this.userIssuedNum(issuedLotto);
        })
    }

    userIssuedNum(input){
        this.createRandomLotto.issuedRandomNumber(input);
    }

}

module.exports = UserInputNumber;
