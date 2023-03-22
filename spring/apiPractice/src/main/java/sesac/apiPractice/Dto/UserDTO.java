package sesac.apiPractice.Dto;

public class UserDTO {
    private int id;
    private String name;
    private String nickname;
    private int no;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getNickname() {
        return nickname;
    }

    public int getNo() {
        return no;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setNo(int no) {
        this.no = no;
    }
}
