# 트리(tree)

+ **계층적인 구조(hierarchical structure)** 의 자료구조
+ 나무를 거꾸로 엎어 놓은 듯한 모양을 하고 있어서 트리라고 부른다!
+ 조직도, 디렉토리 구조, 인공 지능의 의사 결정 트리 등 다양하게 사용된다.

1. [이진 트리(binary tree)](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/README.md#%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%ACbinary-tree)
2. [이진 탐색 트리(binary search tree)]()
3. [AVL 트리](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/tree#avl-%ED%8A%B8%EB%A6%AC-tree)
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

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/tree/img/BinaryTree.png" width="350" height="250"> 

+ **모든 노드가 2개의 서브 트리를 갖고(서브 트리는 모두 이진 트리이며, 공집합일 수 있음), 모든 노드의 차수가 2이하인 트리**.
+ **전체 트리와 서브 트리의 구조는 동일하다.**
   + **n**개의 노드를 갖는 이진 트리는 **n-1**개의 간선을 갖는다.
   + 높이가 **h**인 이진 트리는 **h**개 이상 **(2^h)-1**개 이하의 노드를 갖는다. 
   + 레벨 i에서의 최대 노드 수는 **2^(i-1)** 개 이다.

### 이진 트리 종류

+ **포화 이진 트리(full binary tree)** : 각 레벨에 노드가 꽉 차있는 트리.
+ **완전 이진 트리(complete binary tree)** : 높이-1 까지 노드가 꽉 차있고, 마지막 레벨은 왼쪽 부터 공백 없이 노드가 차 있는 트리.
   + 대표적으로 **힙(heap)** 이 있다.
+ **기타** : 경사 이진 트리 등등

# 이진 트리(binary tree) 연산/구현
### 기본 ADT
+ setvalue(value)
+ setLeft(node)
+ setRight(node)
+ replaceChild(targetNode, newNode)
+ removeChild(node)
+ getRoot()

### 이진 트리의 순회(traversal)

+ **순회(traversal)** 란 트리의 모든 노드를 한번씩 방문하는 것을 말한다. 트리를 화면에 출력하기 위해서도 필요하다!
+ 이진 트리의 표준 순회에는 다음과 같은 3가지 방법이 있다.
   + **전위 순회(preorder traversal)** : V->L->R
   + **중위 순회(inorder traversal)** : L->V->R
   + **후위 순회(postorder traversal)** : L->R->V

### **레벨 순회**


## 연결 리스트로 구현

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


# 이진 탐색 트리(binary-search-tree)

# AVL 트리(-tree)
# Red-Black 트리


# Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree
https://m.blog.naver.com/supergrammer/221288693192
