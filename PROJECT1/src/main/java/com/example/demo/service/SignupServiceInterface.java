package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.SignupEntity;

public interface SignupServiceInterface {
	public List<SignupEntity>getsignupDetails();
    public List<SignupEntity> getAll(int id,String firstname);
    public void savesignupDetails(SignupEntity  se);
 	public void updatesignupDetails(SignupEntity se);
 	public void deletesignupDetails(int id);

}
