package _03_array;

import java.util.ArrayList;
import java.util.Scanner;

public class Practice02 {
    public static void main(String[] args) {
        ArrayList<String> arrayList = new ArrayList<>();
        System.out.println("문자를 입력해주세요. :");
        Scanner scan = new Scanner(System.in);
        String inputV = scan.next();


        while (true) {

            if (inputV.equals("exit")) {
                System.out.println(arrayList);
                break;
            } else {
                System.out.println("문자를 입력해주세요. :");
                inputV = scan.next();
                arrayList.add(inputV);
            }

        }


    }
}
