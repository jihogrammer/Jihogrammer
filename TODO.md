# TODO

- [ ] about Annotation Processor - [link](https://taes-k.github.io/2021/04/18/java-annotation-processing)
  - multi module로 설정하면 간편하게 설정할 수 있을 것으로 보임
  - `@TODO` - 아무 기능 없는 processor. 컴파일에서는 제외될 수 있게 설정.
  - `@Warning` - 최종 목표는 IDE에서 밑줄 치게 해서 바로 볼 수 있게 표시하면 좋겠다.
- [ ] redis cluster topology settings in spring-data-redis and lettuce
  - [dev.gmarket.com - 초보 개발자를 위한 Redis Cluster Migration 가이드라인](https://dev.gmarket.com/71)
  - check version compatibility - [link](https://github.com/spring-projects/spring-boot/issues/15630)
  - check [release note](https://github.com/lettuce-io/lettuce-core/releases)
- [ ] redis connection pool
  - references
    - [[Spring boot] Redis - Lettuce 설정](https://jronin.tistory.com/126)
    - [Redis 커넥션 풀](https://findmypiece.tistory.com/106)
    - [benchmark - 향로(jojoldu)](https://jojoldu.tistory.com/418)
- [ ] redis hash entity 설정 케이스별 정리
  1. `@JsonCreator && @JsonProperty`
  2. `@Builder && @JsonDeserialize`
  3. `ObjectMapper` customizing
- [ ] redis cluster setting in docker - [link](https://velog.io/@backtony/Spring-Redis-Cluster-구축-및-연동하기)
