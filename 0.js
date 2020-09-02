function processWord(input){
    let out;
    let input_ = [...input],even_=[],odd_=[];
    for(let i = 0;i<input_.length;i+=2){
        even_ = even_.concat(input_[i])
        //console.log(even_)
    }

    for(let i = 1;i<input_.length;i+=2){
        odd_ = odd_.concat(input_[i])
        //console.log(odd_)
    }

    out = (even_.concat(' ')).concat(odd_).join('');
    //console.log(out)
    return out
}


function processData(input) {
    //Enter your code her
    let _input_ = [...input]
    let word = [];
    let sentence = []
    _input_.forEach(element => {
        if(element!='\n') {
            word.push(element)
        }
        if(element=='\n') {
            sentence.push(word)
            word = []
        }
    });
    sentence.push(word);

    for(let i = 1 ;i< sentence.length;i++ ){
        console.log(processWord(sentence[i].join('')))
    }; 

}


let input = '2\nHacker\nRank';
console.log(processData(input))