package com.resuera.g2app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private Long userID;

    @Column(name = "UserEmail", unique = true, nullable = false)
    private String userEmail;

    @Column(name = "UserPassword", nullable = false)
    private String userPassword;

    @Column(name = "UserFirstname")
    private String userFirstName;

    @Column(name = "UserMiddlename")
    private String userMiddleName;

    @Column(name = "UserLastname")
    private String userLastName;
}
 