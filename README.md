# Learning Vanilla-Redux and React-Redux

🔗 참고 강의 : <a href="https://nomadcoders.co/redux-for-beginners">노마드코더 Redux 중급 강의</a>

## 개요

Vanillat JavaScript에서 Redux를 사용해보면서, store, dispatch, reducer 기본 개념을 익힌 후 본격적으로 React에 적용하며 간단한 To Do List를 만들었습니다.

## 작동

#### 1. 글씨 작성기 & 삭제하기

<img src="https://user-images.githubusercontent.com/101693495/187485379-ae77555a-ec5d-4010-8141-adf0cf8de137.gif" width="380px">

#### 2. detail page로 넘어가기

<img src="https://user-images.githubusercontent.com/101693495/187485596-c3cb9927-cdc9-4fb2-997b-a6efbe24d33d.gif"  width="300px">

## 리덕스 기본 setting (배운점)

1. store
   - store는 data(state, props)들의 저장소
   - React에서 App.js에서 한 번 state로 props를 내리고 그 이후로 필요할 때 `useSelector()`훅을 사용하여 state값을 자유롭게 사용한다.
2. reducer
   - data를 변경하는 function!! 함수임을 잊지 말기
   - 오직 reducer에서만 데이터를 변경할 수 있다.
   - state: 초기값, action: 소통, 통신
3. dispatch
   - reducer와 통신하는 메세지
   - React 버전 6이상부터 `usedispatch()` 사용
4. subscribe
   - reducer 데이터를 가지고 UI를 구성할 수 있음
