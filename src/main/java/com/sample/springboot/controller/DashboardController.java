/*
 * TestController.java
 *
 * Created on 2017-07-23, 7:28
 */
package com.sample.springboot.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping(path = "/api")
public class DashboardController {

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping(path = "/status")
  @ResponseBody
  public Map<String, Object> showStatus() {

    final Map<String, Object> statusMap = new HashMap<>();

    statusMap.put("status", "Running");
    statusMap.put("refresh_time", new Date().toString());
    return statusMap;
  }

}
