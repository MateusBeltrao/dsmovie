package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Score;
import com.example.demo.entities.ScorePK;
import com.example.demo.entities.User;

public interface UserRepository extends JpaRepository<User, ScorePK> {
	
	User findByEmail(String email);

}
