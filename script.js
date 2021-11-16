class Node {
   constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
   }
}

function printOddNodes(root, isOdd) {

   if (root == null)
      return;

   if (isOdd == true)
      document.write(root.data + " ");

   printOddNodes(root.left, !isOdd);
   printOddNodes(root.right, !isOdd);
}


function newNode(data) {
   let node = new Node(data);
   return (node);
}



let arr = [];
for (let i = 0; i < 6; i++) {
   let res = prompt('Введите значение', '')
   arr.push(res)
}

let root = newNode(arr[0]);
root.left = newNode(arr[1]);
root.right = newNode(arr[2]);
root.left.left = newNode(arr[3]);
root.left.right = newNode(arr[4]);
printOddNodes(root, true);
// фіналочка, гів мі максималочку :D