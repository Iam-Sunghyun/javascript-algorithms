function solution(new_id) {
  let answer = '';

  // 정규 표현식으로 더 간결하게 할 수 있을 듯
  answer = new_id.toLowerCase();
  answer = answer.replace(/[^A-Za-z0-9\-_.]/g, '')
                 .replace(/[^A-Za-z0-9\-_]+/g, '.')
                 //.replace(/^[^A-Za-z0-9\-_]+$/g, '')
                 //.trim().slice(0,16);

                 console.log(answer)
  
  if(answer[0] === '.'){
    answer = answer.slice(1,);
  }
  answer = answer.trim().slice(0,15);

  if(answer[answer.length - 1] === '.'){
    answer = answer.slice(0,answer.length - 1);
  }

  if(answer.length === 0){
    answer += 'a';
  }
  
  if(answer.length <= 2){
    const lastSpell = answer[answer.length - 1];
    
    while(answer.length < 3){
      answer += lastSpell
    }
  }
  

  return answer;
}
