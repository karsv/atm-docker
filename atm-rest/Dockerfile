FROM maven:3.6.3-jdk-11-slim AS MAVEN_BUILD
COPY pom.xml /build/
COPY src /build/src/
WORKDIR /build/
RUN mvn package

FROM openjdk:11-jdk-slim
COPY --from=MAVEN_BUILD /build/target/atm-0.0.1-SNAPSHOT.jar /usr/src/app/
WORKDIR /usr/src/app/
EXPOSE 8081:8081
ENTRYPOINT ["java", "-jar", "atm-0.0.1-SNAPSHOT.jar"]
