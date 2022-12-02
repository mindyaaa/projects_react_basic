import React from 'react';

const Profile = ({image,name,title,isNew}) => {
    return (
        <div className="profile">
            <img className="photo" src={image}
             alt="avatar" />
             {/*isNew === "true" ? <span className='new'>new</span> : null*/}
             {isNew && <span className='new'>new</span>}
             
             <h1>{name}</h1>
             <p>{title}</p>
        </div>
    )
}

export default Profile