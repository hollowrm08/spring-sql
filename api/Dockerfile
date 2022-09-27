FROM openjdk:16-jdk-slim
ADD build/libs/tcc-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

#FROM openjdk:16-jdk-slim
#ARG JAR_FILE=build/libs/tcc-0.0.1-SNAPSHOT.jar
#COPY ${JAR_FILE} app.jar
#RUN bash -c 'touch /app.jar'
#ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar","/app.jar"]