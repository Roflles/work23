import React from 'react';

class Users extends React.Component {

  
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: '1',
          firstname: 'Bob',
          lastname: 'Marley',
          bio: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Repella',
          age: '40',
          isHappy: true
        },
        {
          id: '2',
          firstname: 'John',
          lastname: 'Doe',
          bio: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Repella',
          age: '22',
          isHappy: false
        }
      ]
    }
  }

  render() {
      if(this.users.length > 0)
        return (<div>
          {this.users.map((el) => (<div className='user' key={el.id}>
              <h3>{el.firstname} {el.lastname}</h3>
              <p>{el.bio}</p>
              <b>{el.isHappy ? 'Щясливий :)' : 'Недуже :('}</b>
          </div>))}
        </div>)
      else
          return (<div className='user'>
              <h3>Користувачів немає</h3>
          </div>)
  }
}

export default Users