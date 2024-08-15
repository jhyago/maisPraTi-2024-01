package stack;
import java.util.Stack;

public class StringReverser {
    public static String reverseString(String input){
        Stack<Character> stackInversed = new Stack<>();
        Stack<Character> stackReversed = new Stack<>();
        for(char ch: input.toCharArray()){
            stackInversed.push(ch);
        }

        int length = stackInversed.size();

        String myString = "";

        for(int i = 0; i < length; i++) {
            myString += stackInversed.pop();
        }

        return myString;
    }

    public static void main(String[] args) {
        System.out.println(reverseString("Grêmio"));
    }
}
