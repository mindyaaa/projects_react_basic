import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const addHandler = () => {
    const name = prompt(`새로운 멘토의 이름은 무엇인가요?`);
    const title = prompt(`새로운 멘토의 직함은 무엇인가요?`);

    const newMentor = [...person.mentors];
    newMentor.push({name, title});

    setPerson((person) => ({...person, mentors: newMentor}));

  };

  const deleteHandler = () => {
    const toDelete = prompt(`삭제 원하는 멘토의 이름은 무엇인가요?`);

    const mapMentors = person.mentors.filter((mentor) => mentor.name !== toDelete);
    setPerson((person) => ({...person, mentors : mapMentors}) );

  };

  const changeHandler = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    //if문 이용
    // setPerson((person) => ({...person, mentors : person.mentors.map((mentor) => {
    //   if (mentor.name === prev) {
    //     return {...mentor, name: current}
    //   } return mentor
      
    // }) })
    // );

    //삼항 연산자 이용
    const mentorsMap = person.mentors.map((mentor) =>
      mentor.name === prev ? {...mentor, name:current} : mentor);

    setPerson((person) => ({...person, mentors : mentorsMap}));

  }


  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={changeHandler}
      >
        멘토의 이름을 바꾸기
      </button>

      <button onClick={addHandler}>멘토 추가하기</button>

      <button onClick={deleteHandler}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '아아',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};