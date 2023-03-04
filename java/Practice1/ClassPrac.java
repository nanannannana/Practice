package Practice1;

import java.util.Scanner;
import java.util.ArrayList;

public class ClassPrac {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Square> arr = new ArrayList<>();
		
		while (true) {
			System.out.println("가로, 세로 길이 입력");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			Square square = new Square();
			if (width==0 && height==0) {
				for (Square value: arr) {
					System.out.println("가로: "+value.getWidth());
					System.out.println("세로: "+value.getHeight());
					System.out.println("넓이: "+value.area());
					System.out.println("----------------");
					Square.count++;
				}
				System.out.println("인스턴스의 개수: "+Square.count);
				break;
			}
			square.setWidth(width);
			square.setHeight(height);
			arr.add(square);
		}
		
	}

}
