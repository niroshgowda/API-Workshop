package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.SignupEntity;

@Repository
public interface SignUpRepoInterface extends JpaRepository<SignupEntity,Integer>,CrudRepository<SignupEntity, Integer>{
	@Query(value="SELECT * FROM signup WHERE id=:id and firstname=:firstname",nativeQuery=true)
	public List<SignupEntity>getAll(int id,String firstname);

}
