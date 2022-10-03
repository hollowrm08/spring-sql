FROM openjdk:16-jdk-slim
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]