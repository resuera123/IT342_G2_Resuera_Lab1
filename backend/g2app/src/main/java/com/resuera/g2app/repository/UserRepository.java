package com.resuera.g2app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resuera.g2app.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUserEmail(String userEmail);
}
 