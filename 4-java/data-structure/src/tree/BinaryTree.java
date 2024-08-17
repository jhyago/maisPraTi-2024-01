package tree;

class Node {
    int value;
    Node left;
    Node right;

    public Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    public BinaryTree(){
        this.root = null;
    }

    public void add(int value){
        this.root = addRecursive(this.root, value);
    }

    private Node addRecursive(Node current, int value){
        if(current == null){
            return new Node(value);
        }

        if(value < current.value){
            current.left = addRecursive(current.left, value);
        } else if(value > current.value){
            current.right = addRecursive(current.right, value);
        }

        return current;
    }

    public void remove(int value){
        this.root = removeRecursive(this.root, value);
    }

    private Node removeRecursive(Node current, int value){
        if(current == null){
            return null;
        }

        if(value < current.value){
           current.left = removeRecursive(current.left, value);
        } else if(value > current.value){
            current.right = removeRecursive(current.right, value);
        } else {
            if(current.left == null && current.right == null){
                return null;
            }

            if(current.left == null){
                return current.right;
            }

            if(current.right == null){
                return current.left;
            }

            int smallestValue = findSmallestValue(current.right);

            current.value = smallestValue;

            current.right = removeRecursive(current.right, smallestValue);
        }

        return current;
    }

    private int findSmallestValue(Node root){
        return root.left == null ? root.value : findSmallestValue(root.left);
    }

    public void ordenedPrint(Node current){
        if(current != null){
            ordenedPrint(current.left);
            System.out.println(current.value);
            ordenedPrint(current.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree arvoreBinaria = new BinaryTree();

        arvoreBinaria.add(10);
        arvoreBinaria.add(11);
        arvoreBinaria.add(9);
        arvoreBinaria.add(8);
        arvoreBinaria.add(20);
        arvoreBinaria.add(15);
        arvoreBinaria.add(22);


        arvoreBinaria.remove(22);
        arvoreBinaria.ordenedPrint(arvoreBinaria.root);
    }
}


