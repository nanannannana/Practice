package Practice1;

public class Square {
	private int width;
	private int height;
	public static int count = 0;

	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
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
