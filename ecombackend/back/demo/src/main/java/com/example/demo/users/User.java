package com.example.demo.users;
public class User {

private long id ; 
private String nom ; 
private String email ; 
private String password ;
private String role ;
public User(long id, String nom, String email, String password, String role) {
    this.id = id;
    this.nom = nom;
    this.email=email ; 
    this.password=password ; 
    this.role=role ; 
};
public User() { } ; 

public User(String nom, String email, String password, String role){
    this.nom = nom;
    this.email=email ; 
    this.password=password ; 
    this.role=role ;
}
public long getId() {
    return this.id ; 
}
public String getNom(){
    return this.nom ; 
} ; 
public String getEmail(){
    return this.email ; 
};
public String getPassword(){
    return this.password ;
}
public String getRole(){
    return this.role ; 
} ; 
public void setId(long id) {
    this.id = id;
    }
public void setNom(String nom) {
    this.nom = nom;
    }
public void setEmail(String email) {
    this.email = email;
    }
public void setPassword(String password) {
    this.password = password;
    }
public void setRole(String role) {
    this.role = role;
    }
    @Override
    public String toString() {
        return "User{" +
                "Id=" + id +
                ", FirstName='" + nom + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                '}';
    }





}



