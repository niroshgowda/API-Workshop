package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginEntity;
import com.example.demo.repository.LoginRepoInterface;

@Service
public class LoginService implements LoginServiceInterface{
	@Autowired
	private LoginRepoInterface lr;
	@Override
    public List<LoginEntity> getloginDetails()
    {
    	return lr.findAll();
    }
	
	@Override
	public List<LoginEntity> getAll(int id) 
	{
		return lr.getAll(id);
	}

	@Override
	public void saveloginDetails(LoginEntity le) 
	{
		lr.save(le);
	}

	@Override
	public void updateloginDetails(LoginEntity le) 
	{
		lr.save(le);
	}

	@Override
	public void deleteloginDetails(int id) 
	{
		lr.deleteById(id);
		
	}

}
