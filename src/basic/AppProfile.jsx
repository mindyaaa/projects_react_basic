import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function AppProfile() {

  return(
    <>
    <button onClick={(e) => {
      console.log(e);
      alert('button clicked')
    }}>버튼</button>
    
    <form action="">
      <input type="text" />
    </form>
    
    <Avatar
     image="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F02%2Fjujutsu-kaisen-anime-season-2-to-air-in-2023-news-ft.jpg?w=960&cbr=1&q=90&fit=max"
     isNew={true}
      />

    <Profile
    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    name="Summer"
    title="Develpor"
    isNew={true}
    />
    <Profile
    image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    name="Winter"
    title="Designer" 
    isNew={true}
    />
    <Profile
    image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    name="James"
    title="Photographer"
    isNew={false}
     />

    </>
  )
}

export default AppProfile;
