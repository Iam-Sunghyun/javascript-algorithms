# 트리(tree)

+ **계층적인 구조(hierarchical structure)** 의 자료구조
+ 나무를 거꾸로 엎어 놓은 듯한 모양을 하고 있어서 트리라고 부른다!
+ 조직도, 디렉토리 구조, 인공 지능의 의사 결정 트리 등 다양하게 사용된다.

1. [이진 트리(binary tree)](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/tree#%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%ACbinary-tree)
2. [이진 탐색 트리(BST,binary search tree)](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/tree#%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89-%ED%8A%B8%EB%A6%ACbstbinary-search-tree)
3. [AVL 트리](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/tree#avl-%ED%8A%B8%EB%A6%ACavl-tree)
4. [Red-Black 트리](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/tree#red-black-%ED%8A%B8%EB%A6%AC)

## 트리의 용어(terms)

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/tree-terms.png" width="650" height="350"> 

+ 트리는 한개 이상의 **노드(node)**로 구성되며 노드를 연결 하는 선을 **간선(edge)** 이라고 한다.
+ 가장 높은 곳의 노드를 **루트(root) 노드**라 하며 나머지 노드들을 **서브 트리(subtree)** 라고 한다.
   + **루트 노드 다음 레벨에 있는 노드들은 더 밑에 있는 서브 트리의 루트 노드가 되는 재귀적인 성질을 띄고 있다.**  
+ 그림에서 **Q**와 **R**은 루트 노드 **P**의 **자식 노드(child node)** 이며 **P**는 **Q**와 **R**의 **부모 노드(parent node)** 이다. 
+ 노드 **Q**와 **R**은 **형제(sibling)** 이다.
+ **조상 노드(ancestor node)** 는 임의의 노드에서 루트 노드까지 경로 상의 모든 노드를 말하고 **자손 노드(descendent node)** 는 임의의 노드 하위에 연결된 모든 노드를 말한다.
+ 자식 노드가 없는 노드를 **단말 노드(terminal node, leaf node)** 라 하고, 반대는 **비단말 노드(nonterminal node)** 가 된다.
+ 어떤 노드의 자식 수를 **차수(degree)** 라 한다.
+ **트리의 차수**는 트리의 노드 차수 중 가장 큰 값을 말한다. 그림의 트리 차수는 **L**노드의 차수 **3**이다.
+ 트리의 **레벨(level)** 은 트리의 각 층에 번호를 매기는 것으로, 루트 부터 1, 한 층씩 내려 갈수록 1씩 상승한다. 
+ 트리 최대 레벨을 **높이(height)** 라 한다. (그림 속 트리의 높이는 5)


# 이진 트리(binary tree)

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/binaryTree.JPG" width="320" height="250"> 

+ **모든 노드가 2개의 서브 트리를 갖고(서브 트리는 모두 이진 트리이며, 공집합일 수 있음), 모든 노드의 차수가 2이하인 트리**.
+ **전체 트리와 서브 트리의 구조는 동일하다.**
   + **n**개의 노드를 갖는 이진 트리는 **n-1**개의 간선을 갖는다.
   + 높이가 **h**인 이진 트리는 **h**개 이상 **(2^h)-1**개 이하의 노드를 갖는다. 
   + N개의 노드를 갖는 트리의 높이는 최소 (logN)+1 ~ 최대 N 이다
   + 레벨 i에서의 최대 노드 수는 **2^(i-1)** 개 이다.

### 이진 트리 종류

+ **포화 이진 트리(full binary tree)** : 각 레벨에 노드가 꽉 차있는 트리.
+ **완전 이진 트리(complete binary tree)** : 높이-1 까지 노드가 꽉 차있고, 마지막 레벨은 왼쪽 부터 공백 없이 노드가 차 있는 트리.
   + 대표적으로 **힙(heap)** 이 있다.
+ **기타** : 경사 이진 트리, AVL 트리, 이진 탐색 트리, 레드 블랙 트리 등

# 이진 트리 연산/구현
### 기본 ADT
+ setvalue(value)
+ setLeft(node)
+ setRight(node)
+ replaceChild(targetNode, newNode)
+ removeChild(node)
+ getRoot()

## 이진 트리의 순회(traversal)

+ **순회(traversal)** 란 **트리의 모든 노드를 한번씩 방문하는 것**을 말한다. 트리를 화면에 출력하기 위해서도 필요하다!
+ 이진 트리의 표준 순회에는 다음과 같은 3가지 방법이 있다.
   + **전위 순회(preorder traversal)** : V->L->R
   + **중위 순회(inorder traversal)** : L->V->R
   + **후위 순회(postorder traversal)** : L->R->V

### **레벨 순회(level order travelsal)**
+ 각 노드를 **레벨(level)순으로 검사하는 방법**. 같은 레벨에선 왼쪽부터 오른쪽으로 순회 한다.
+ 큐(queue)를 이용하여 순회 한다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/level-order-travelsal.png" width="500" height="320"> 

### 노드 개수 구하기

+ 어떤 노드를 루트 노드로 하는 이진 트리의 노드 개수는, 왼쪽, 오른쪽 서브 트리 노드 개수에 루트 노트 수를 더해주면 된다.
+ 재귀(recursion)을 이용해 구한다.

```
countNode(node = this){
    if(!node) return 0;
    return 1 + this.countNode(node.left) + this.countNode(node.right);
  }
```
### 단말 노드(leaf node) 개수 구하기
+ 왼쪽 자식과 오른쪽 자식이 모두 null일 경우 단말 노드가 되며 +1 해주면 된다.
+ 아닐 경우 자식 노드에 대해서 재귀적으로 함수를 호출한다.
```
countLeaf(node = this){
    if(!node) return 0; 
    if(!node.left && !node.right) return 1;
    return this.countLeaf(node.left) + this.countNode(node.right);
  }
```

### 트리 높이(height) 구하기
+ 후위 순회를 사용한다. 재귀를 통해 왼쪽, 오른쪽 서브 트리 중 더 높은 트리를 찾아 +1(루트 노드 레벨) 해준다.
+ 서브 트리 return 값을 서로 더하는 것이 아닌 것에 주의!
```
 getHeight(node = this){
    if(!node) return 0;
    return 1 + Math.max(this.getHeight(node.left),this.getHeight(node.right));
  }
```

## 연결 리스트로 구현

[**이진 트리**](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/binary-tree.js) 참조   
+ 각 노드는 **부모 노드, 왼쪽 자식, 오른쪽 자식의 링크**와 **데이터 필드**를 갖는다.
+ 하나의 트리에 접근하기 위한 유일한 데이터는 **루트 노드**이다.(각 노드가 서브트리의 루트 노드가 됨)


## 배열로 구현

+ 배열을 통한 구현은 **포화 이진 트리**나, **완전 이진 트리**에 **적합하다.**
+ 그 외에도 구현할 순 있지만, 경사 이진 트리와 같은 경우 메모리 낭비가 커진다.
+ ↓ 특정 노드 i에 대한 인덱스 연산 (루트 노드 인덱스는 1로 가정).
```
부모 노드 : i/2
왼쪽 자식 : i*2
오른쪽 자식: i*2 + 1
```
<br>

# 이진 탐색 트리(BST,binary-search-tree)
+ 이진 탐색 트리는 효율적인 탐색을 위한 **이진 트리 기반의 자료구조** 이다.
+ 모든 노드는 **유일한 키**를 갖는다.
+ **왼쪽** 서브 트리 키들은 루트 노드 키보다 **작고**, **오른쪽** 서브 트리 키들은 루트 노드 키보다 **크다.**
+ 왼쪽, 오른쪽 서브 트리도 이진 탐색 트리이다!


<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/binarySearchTree.png" width="500" height="250"> 

## 이진 탐색 트리 연산/구현
[**이진 탐색 트리**](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/binary-search-tree.js) 참조
+ 이진 탐색 트리도 이진 트리 이므로, 기본적인 연산은 이진 트리와 같고, 동일하게 사용할 수 있다. 
+ 다만, 삽입, 삭제, 탐색의 경우 이진 탐색 트리의 성질에 맞게 일정한 연산을 거쳐 이루어져야 한다!

## 탐색(search) 연산
+ 찾고자 하는 키 값을 매개변수로 받아 **루트 노드부터 값을 탐색**한다.
+ 키와 노드의 값을 비교하여 일치하는 경우 해당 노드를 return 하고, 작을 경우 왼쪽 서브 트리, 클 경우 오른쪽 서브 트리에 대해 동일하게 다시 탐색한다.
+ 재귀/반복을 이용해 구현한다.

## 삽입(insert) 연산
+ 먼저 루트 노드부터 탐색을 시작한다. 삽입하려는 값과 노드의 value가 일치하는 경우 삽입이 불가능하다(중복이므로).
+ 일치하지 않는 경우 비교 결과에 따라 왼쪽, 오른쪽 서브 트리로 이동해 탐색을 반복적으로 실행한다.
+ 탐색에 실패한 위치가 삽입될 위치이다!

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/insert_search.png" width="500" height="250"> 

## 삭제(delete) 연산
+ 이진 탐색 트리에서 가장 복잡한 연산! 3가지 경우를 고려하여 구현한다.
   + **단말 노드 삭제** - 해당 노드만 삭제해주면 됨
   + **자식이 하나 있는 노드 삭제** - 자식 노드를 삭제하려는 노드의 부모 노드에 연결해준다.
   + **자식이 둘 있는 노드 삭제 - 가장 복잡**
+ 삭제 연산을 위해선 해당 노드의 **부모 노드 참조가 필요**하다.

### 자식이 둘 있는 노드 삭제 
+ 먼저 삭제할 노드의 **후계자 노드**를 찾는다. -> 후계자 노드는 삭제하려는 값과 가장 비슷한 노드가 되어야 이진 탐색 트리의 성질을 유지할 수 있다.
+ 삭제하려는 노드의 **왼쪽 서브 트리에서 가장 큰 값**, 혹은 **오른쪽 서브 트리에서 가장 작은 값**이 해당 노드의 값과 가장 비슷하다!

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/binary-search-tree-delete1.jpg" width="550" height="350"> 

## 이진 탐색 트리의 성능 

+ 이진 탐색 트리의 높이가 **h**라고 했을 때, 삽입, 삭제, 탐색의 시간 복잡도는 **O(h)** 가 된다(트리의 높이를 넘을 순 없으므로). 
+ 따라서 n개의 노드를 갖는 이진 탐색 트리의 경우 연산의 평균적인 시간 복잡도는 **O(logN)** 이 된다! (좌우 서브 트리가 균형을 이룬 경우에 해당)
+ 경사 이진 트리같은 경우 트리의 높이가 n이 되어 선형 탐색과 동일한 복잡도(O(n))를 갖는다. 따라서 이진 탐색 트리의 연산 효율을 높이기 위해선 좌우 균형이 중요하다.

탐색|삽입|삭제|
:---:|:---:|:---:|
O(logn)|O(logn)|O(logn)|

<br>

# AVL 트리(AVL-tree)
+ AVL 트리란 Adelson-Velskii와 Landis가 제안한 트리로, 각 노드에서 **왼쪽 서브 트리의 높이와 오른쪽 서브 트리의 높이 차이가 1 이하인 이진 탐색 트리**를 말한다!
+ 트리가 불균형해지면 노드를 재배치하여 균형 상태로 만든다 -> **항상 균형을 유지하기 때문에 O(logN)의 탐색, 삽입, 삭제 시간이 보장된다.**

## AVL 트리의 연산/구현
+ 우선 **균형 인수(balance factor)** 를 정의한다. 
+ 균형 인수는 **(왼쪽 서브트리 높이 - 오른쪽 서브 트리의 높이)** 로 정의되며 **모든 노드의 균형 인수가 ±1이면 AVL 트리이다.**
+ AVL 트리의 탐색 연산은 일반 이진 탐색 트리와 동일하다! **균형이 깨질 수 있는 연산은 삽입과 삭제 연산**이다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/AVLtree.png" width="550" height="300"> 

## 삽입 연산

+ 하나의 노드가 삽입되면, 루트 노드부터 삽입 위치까지 경로상의 모든 조상 노드들의 균형 인수가 영향을 받는다.
+ **이런 경우 불균형 상태(균형 인수 ±2이상)로 변한 가장 가까운 조상 노드의 서브 트리들을 회전시켜 균형을 맞춰줘야 한다.**

### 균형이 깨지는 4가지 경우

새로 삽입되는 노드를 **N**, **N**에서 가장 가까우면서 균형 인수가 ±2 이상인 조상 노드를 **A**라 할 때,
+ **LL** 타입: N이 A의 왼쪽 서브트리의 왼쪽 서브트리에 삽입되는 경우.
+ **LR** 타입: N이 A의 왼쪽 서브트리의 오른쪽 서브트리에 삽입되는 경우.
+ **RR** 타입: N이 A의 오른쪽 서브트리의 오른쪽 서브트리에 삽입되는 경우.
+ **RL** 타입: N이 A의 오른쪽 서브트리의 왼쪽 서브트리에 삽입되는 경우.

다음은 위 4가지 경우에 균형을 맞추기 위해 필요한 연산들이다. 

## 단순 회전(single rotation)

+ **LL 회전** : A부터 N까지 경로상의 노드들을 오른쪽으로 회전시킨다.
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/rotateLL.png" width="550" height="300"> 

<br>

+ **RR 회전** : A부터 N까지 경로상의 노드들을 왼쪽으로 회전시킨다.
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/rotateRR.png" width="550" height="300"> 


## 이중 회전(double rotation)

+ **LR 회전** : A부터 N까지 경로상의 노드들을 왼쪽->오른쪽으로 회전시킨다. (RR회전 -> LL회전)
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/rotateLR.JPG" width="630" height="280"> 

+ **RL 회전** : A부터 N까지 경로상의 노드들을 오른쪽->왼쪽 회전시킨다. (LL회전 -> RR회전)
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/rotateRL.png" width="630" height="280"> 


# Red-Black 트리


# Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree   
https://m.blog.naver.com/supergrammer/221288693192   
https://ratsgo.github.io/data%20structure&algorithm/2017/10/22/bst/   
https://yjg-lab.tistory.com/139   
https://slidesplayer.org/slide/14592903/   
https://velog.io/@limsh_98/%ED%83%90%EC%83%89-AVL%ED%8A%B8%EB%A6%AC   
