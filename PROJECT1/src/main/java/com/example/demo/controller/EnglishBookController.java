package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.EnglishBookEntity;
import com.example.demo.service.EnglishBookService;

@RestController
@CrossOrigin
public class EnglishBookController {
	@Autowired
	EnglishBookService es;
	
	@GetMapping("/getenglish")
   public Iterable<EnglishBookEntity> getenglishbbookData()
   {
	   return es.getenglishbookDetails();
   }
	 @GetMapping("/getenglish1")
	   public Iterable<EnglishBookEntity> getAllDetails(@RequestParam int id,@RequestParam String author)
	   {
		   return es.getAll(id, author);
	   }
	
	@PostMapping("/postenglish")
	public void saveenglishbookData(@RequestBody EnglishBookEntity ee)
	{
		es.saveenglishbookDetails(ee);
	}
	@PutMapping("/putenglish")
	public void updateenglishbookData(@RequestBody EnglishBookEntity ee,@RequestParam int id)
	{
		ee.setId(id);
		es.updateenglishbookDetails(ee);
	}
	@DeleteMapping("/deleteenglish")
	public void deleteenglishbookData(@RequestParam int id)
	{
		es.deleteenglishbookDetails(id);
	}
}


