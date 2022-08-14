package com.backend.springdatajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.backend.springdatajpa.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
}
