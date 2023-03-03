package Practice1;

import java.util.Scanner;
import java.util.ArrayList;

public class ClassPrac {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("가로, 세로 길이 입력");
		int width = scanner.nextInt();
		int height = scanner.nextInt();
		Square square = new Square(width);
		square.setHeight(height);
		
		ArrayList<Square> arr = new ArrayList<>();
		arr.add(square);
		
		for (Square value: arr) {
			System.out.println("가로: "+value.getWidth());
			System.out.println("세로: "+value.getHeight());
		}
		System.out.println("넓이: "+square.area());
	}

}
