package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="englishbook")
public class EnglishBookEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String bookname;
	private String bookno;
	private String author;
	private String publisher;
	private String borrower;
	private String borrodate;
	private String returndate;
	public EnglishBookEntity() {
		super();
	}
	public EnglishBookEntity(int id, String bookname, String bookno, String author, String publisher, String borrower,
			String borrodate, String returndate) {
		super();
		this.id = id;
		this.bookname = bookname;
		this.bookno = bookno;
		this.author = author;
		this.publisher = publisher;
		this.borrower = borrower;
		this.borrodate = borrodate;
		this.returndate = returndate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getBookno() {
		return bookno;
	}
	public void setBookno(String bookno) {
		this.bookno = bookno;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getBorrower() {
		return borrower;
	}
	public void setBorrower(String borrower) {
		this.borrower = borrower;
	}
	public String getBorrodate() {
		return borrodate;
	}
	public void setBorrodate(String borrodate) {
		this.borrodate = borrodate;
	}
	public String getReturndate() {
		return returndate;
	}
	public void setReturndate(String returndate) {
		this.returndate = returndate;
	}
	

}
