package practice.mybatiscrud.Domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private int id;
    private String grade;
    private String name;
    private String email;
    private int phone;
}
