# 토이프로젝트 : 모이다(mo2da)
회원들끼리 소통할 수 있는 공간을 만들어 보면서 springboot + jpa / vue3 를 공부하고 정리해보자

- 기술스택 
java, HTML, CSS, javascript, springboot, jpa, vue3



## 구현할 기능
- 회원가입 및 로그인
- 자유게시판
- 친구추가 및 관리
- 채팅


## 회원가입 구현 
### 2022.08.29
- 중복아이디일 경우 JoinException.class 예외 생성해서 throws (추후 @ControllerAdvice 로 예외처리를 따로 해줄 예정)
- MemberService() 중복아이디 테스트 코드 작성 완료
- LoginController /post 요청에 대한 정상케이스 테스트 코드 작성 완료 (추후 @Valid 추가 필요)

### 2022.08.30
- vue-front 에서 회원가입폼 post 요청처리 완료. h2 db update 확인
- post("/login") 요청에 대한 정상 시나리오 테스트 및 back & front 구현 완료 (추후 @ControllerAdvice 로 예외처리 따로 해줄 예정, 우선 성공 후 @id 값 리턴)