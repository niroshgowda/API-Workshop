package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.LoginEntity;

public interface LoginServiceInterface {
	public List<LoginEntity>getloginDetails();
	 public List<LoginEntity> getAll(int id);
	public void saveloginDetails(LoginEntity le);
	public void updateloginDetails(LoginEntity le);
	public void deleteloginDetails(int id);

}
