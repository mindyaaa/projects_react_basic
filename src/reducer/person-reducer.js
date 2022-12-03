export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated' : {
            const {prev, current} = action;
            // 아래와 같음
            // const prev = action.prev;
            // const current = action.current;

            return {
                ...person, 
                mentors : person.mentors.map((mentor) => {
                if (mentor.name === prev) {
                  return {...mentor, name: current}
                }
                return mentor;
              })

            };
        }

        case 'added' : {
            const {name, title} = action;

            const newMentor = [...person.mentors];
            newMentor.push({name, title});
        
            return {...person, mentors: newMentor};
        }

        case 'deleted' : {
            const {toDelete} = action;

            const mapMentors = person.mentors.filter((mentor) => mentor.name !== toDelete);
            return {...person, mentors : mapMentors};
        }

        default : {
            throw Error(`알 수 없는 액션 타입이다 : ${action.type}`)
        }
    }
}