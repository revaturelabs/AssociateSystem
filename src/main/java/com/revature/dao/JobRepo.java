package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.pojos.Job;

@Repository
public interface JobRepo extends JpaRepository<Job, Integer> {

}
