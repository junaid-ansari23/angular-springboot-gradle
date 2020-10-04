# angular-springboot-gradle
A sample Angular(4) application with Springboot as backend and build and deploy using Gradle.

https://github.com/junaid-ansari23/angular-springboot-gradle

## Building and launching the app
* This sample application is built on Angular4 and Springboot. UI and backend parts are clubbed into a single fat executable JAR using gradle angular+sprinboot plugin.
* UI part is located under src/main/webapp. Webapp directory has all required files to compile and run angular source. It has one sample angular component for demo.
* Backend/Springboot components are located under directory src/main/java.
* Gradle build script(build.gradle) has tasks to build and package angular - installAngular, buildAngular.
* To build, run "gradlew clean build". This will build both angular and java and create a springboot executable jar under build/libs/{project-name}-1.0.jar.
* Launch UI with `java -jar build/libs/{project-name}-1.0.jar` , for local: `http://localhost:8080/` ,on server: `http://{server}:8080/`
* Upon start of application, spring boot will start embeded tomcat server on default port 8080. We can change the port by adding property: "server.port=8081" in application.properties file.
