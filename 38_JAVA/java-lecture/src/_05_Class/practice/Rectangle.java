package _05_Class.practice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Rectangle {
    private int width;
    private int height;

    public Rectangle(int width) {
        this.width = width;
        // this.height = height;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int height) {
        this.height = height;
    }


    public int RectangleArea(int width, int height) {
        return width * height;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<Rectangle> rectangleList = new ArrayList();
        //        System.out.println(r.RectangleArea(r.width,);
        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");

            int inputW = scan.nextInt();
            int inputH = scan.nextInt();

            Rectangle r = new Rectangle(inputW);
            r.setHeight(inputH);

            rectangleList.add(r);

            if (inputW == 0) {
                System.out.println("Rectangle 인스턴스의 개수는: " + rectangleList.size());
                break;
            }

        }

        for (int i = 0; i < rectangleList.size(); i++) {
            System.out.println("=====================");
            System.out.println("가로 길이는: " + rectangleList.get(i).getWidth());
            System.out.println("세로 길이는: " + rectangleList.get(i).getHeight());
            System.out.println("넓이는: " + rectangleList.get(i).getWidth() * rectangleList.get(i).getHeight());
        }

    }
}
