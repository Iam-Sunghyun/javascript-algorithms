const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ')).slice(1);

function solution(input) {
    const tree = Array.from(new Array(input.length + 2), () => []);
    const parentList = new Array(input.length + 2).fill(0);
    const visitCheck = new Array(input.length + 2).fill(false);
    
    // console.log([tree, parentList, input])
    // 인접 리스트로 연결된 노드 저장
    for(const [node1, node2] of input){
        tree[node1].push(node2);
    }
    
    // 노드 순회
    for(const i in tree){
        
        // i번 노드에 연결된 노드가 있다면
        if(tree[i].length !== 0){
        
            // i번 노드와 연결된 노드 모두 방문
            for(const j of tree[i]){
                
                // i번 노드와 연결된 노드 중 1(루트노드)이 있다면 i번 노드의 부모를 루트노드로 설정 후 break
                if(j === '1') {
                    parentList[i] = '1';
                    break;
                }
                
                // 혹은 i번 노드의 부모가 1(루트노드)로 이미 설정되어 있었다면 j번 노드는 i번 노드의 자식으로 저장하고 break
                if(parentList[i] === '1'){
                    parentList[j] = i;
                    break;
                }
                
                // 둘 다 아니라면 서로를 부모로 등록(parentList에 기록)
                [parentList[i], parentList[j]] = [j, i];
            }

        }
    }
    
    // `tree: [${tree}] \n input: [${input}] \n visitCheck: [${visitCheck}]`;
    // [tree, parentList, input];
    return [tree, parentList];
    
}

console.log(solution(input));


// 반례 1
// 7
// 2 4
// 4 7
// 6 3
// 3 5
// 4 1
// 1 6
// 반례 1 답
// 4
// 6
// 1
// 3
// 1
// 4

// 반례 2
// 10
// 1 3
// 5 4
// 3 2
// 2 7
// 5 7
// 9 10
// 5 10
// 6 8
// 1 6
// 반례 2 Answer
// 3
// 1
// 5
// 7
// 1
// 2
// 6
// 10
// 5