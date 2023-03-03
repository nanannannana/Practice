package Practice1;

public class Square {
	public int width;
	public int height;
	
	public Square(int width) {
		this.width = width;
	}
	
	public int getWidth() {
		return width;
	}
	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int area() {
		return width * height;
	}
}
