package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EnglishBookEntity;
import com.example.demo.repository.EnglishBookRepoInterface;

@Service
public class EnglishBookService {
	@Autowired
 EnglishBookRepoInterface er;
	public Iterable<EnglishBookEntity> getData()
	{
		return er.findAll();
	}
	
	public Iterable<EnglishBookEntity> getenglishbookDetails() 
	{
		
		return er.findAll();
	}
	

	public Iterable<EnglishBookEntity> getAll(int id, String author) 
	{
		return er.getAll(id, author);
	}
   
	public void saveenglishbookDetails(EnglishBookEntity ee) 
	{
		
		er.save(ee);
	}
    
	public void updateenglishbookDetails(EnglishBookEntity ee) 
	{
		er.save(ee);
		
	}
   
	public void deleteenglishbookDetails(int id) 
	{
		er.deleteById(id);
		
	}

}
