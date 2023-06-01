package com.example.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.EnglishBookEntity;

@Repository
public interface EnglishBookRepoInterface extends CrudRepository<EnglishBookEntity, Integer> 
{
	@Query(value="select b.id,b.author from EnglishBookEntity b")
	public Iterable<EnglishBookEntity>getAll(int bno,String author);

}
