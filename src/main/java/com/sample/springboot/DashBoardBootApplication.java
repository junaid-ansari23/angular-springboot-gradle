package com.sample.springboot;

import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.sample.springboot" })
public class DashBoardBootApplication {
  
	public static void main(String[] args) {
		SpringApplication.run(DashBoardBootApplication.class, args);
		System.out.println("Started Dashboard App at: "+new Date());
	}
}
