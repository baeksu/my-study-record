# SASS (SCSS) 학습하기

## SASS 전처리기 & 컴파일러 설치하기

1. vscode 확장프로그램에 **Live Sass Compiler** 설치하기
  Sass 또는 SCSS 구문으로 작성된 코드를 실시간으로 모니터링하여 즉각적으로 CSS
  파일로 빌드 해준다. 

  > .scss 파일을 만든후에 거기다가 내용을 작성하고 vscode 하단에 **watching scss** 을 한번 클릭하면 .css 파일을 생성해준다.

2. "npm install -g sass" 설치하기
  명령어 : sass --watch style/main.scss:style/main.css 를 통해서 어떤파일을 읽어서 어디에 생성할지 설정할 수 있다.
  --watch 를 통해서 변경을 감지해서 자동으로 빌드를 해준다.
  > 명령어로 하면 좋은점이 여러가지 옵션을 적용시켜줄수 있넹, 이렇게 하면 다른사람은 보기 힘들듯?
  > 압축 스타일 옵션: sass --style compressed style/main.scss:style/main.css


## 주석
sass 코드에서 한줄짜리 주석의 경우 **//** 를 사용할 수 있는데, 한줄짜리 주석은 빌드한 결과물에 포함되지 않는다..!

## 중첩 규칙 (nesting)
css에서는 스타일을 정의하기 위해 선택자를 서로 다른 선언문에서 반복해서 써야 하는 경우가 있다. 
- div{}
- div p{}
- div p span{}
> 유지보수가 너무 힘들다~~

아래처럼 중첩적으로 사용할 수가 있다.
```sass
div{
  width: 100px;
  height: 100px;
  p{
    color:red;
    span{
      color:blue;
    }
  }
}
```

## 단축 속성 중첩 (네임스페이스 속성 중첩)
원래는 font-family, font-size... 요런식인데 공통부분을 따로 빼내서 묶어줄 수 있다.
```sass
p{
  font:{
    family: sans-serif;
    size: 1em;
    style: normal;
    weight: 900;
  }
}
```

& 기호를 사용해서 상위 선택자를 참조할 수 있다. 이게 어떤말이냐면 아래 코드를 보면 button 이 active 상태일 때의 설정을 다음과 같이 할 수 있다. 뭔가 이렇게 하면 button 의 여러가지 상태에 따른 코드를 중앙 집중적으로 관리할 수 있는듯, 마치 클래스 같은 느낌인가?
```sass
button{
  &:active{
    background-color: red;
  }
}

//기존
button:active{
  background-color:red;
}
```

## 변수
$main-color: yellow; 요런식으로 변수를 지정할 수 있음
공통적으로 쓰는 색깔같은걸 설정할때 공통적으로 설정하고 변경에 대응할 수 있다.

```css
$main-color:green;
$font-color:blue;



$main-color:green;
$font-color:blue;
$btn-width: 100px;

button{
  &:nth-child(1){
    color: $font-color;
    background-color: $main-color;
    width: $btn-width;
    }
  &:nth-child(2){
    color: $font-color;
    background-color: $main-color;
    width:$btn-width;
  }
  &:nth-child(3){
    color: $font-color;
    background-color: $main-color;
    width:$btn-width;    
  }
}
```

## 믹스인
비슷하거나 동일한 스타일이 반복해서 사용해야하는경우, 믹스인을 사용하면 사이트 전체에서 재사용할 스타일 그룹을 정의할 수 있다.
이게 약간 함수같이 매개변수를 넘겨서 속성값을 세팅해 줄 수도 있넹. default 값을 통해서 인자를 넘기지않을때도 대응을 할 수 있다.

```css
@mixin box-style ($bg-color:black, $font-color:black){
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
  color:$font-color;
} 
.one{
  @include box-style();
}

.two{
  @include box-style(purple,blue);
}

//이렇게 콕 집어서 매개변수를 선택해서 넘길 수도 있다.
.three{
  @include box-style($bg-coclor:red);
}
```

## @content
콘텐츠 지시자를 이용하면 스타일 블록 전체를 믹스인으로 넘길 수 있다.

```css
//width, height 는 공통으로 가지고 color & background-color 는 다르게 하고 싶을 때
@mixin btn-style {
  @content;
  width:100px;
  height:25px;
}

//이부분이 @content 지시자 있는 부분에 대입된다
.one{
  @include btn-style(){
    color: white;
    background-color: tomato;
  }
}

.two{
  @include btn-style(){
    color: red;
    background-color: teal;
  }
}

```

## @import
