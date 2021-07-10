import styles from './Users.module.css'

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1,
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-mBMoNIzZnnMP32KPoQECE2pSR8pNoMy8g&usqp=CAU',
          followed: false,
          fullName: 'Dmitriy',
          status: 'staff',
          location: {
            city: 'Minsk',
            country: 'Belarus'
          },
        },
        {
          id: 2,
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-mBMoNIzZnnMP32KPoQECE2pSR8pNoMy8g&usqp=CAU',
          followed: true,
          fullName: 'Viktar',
          status: 'staff security',
          location: {
            city: 'Moscow',
            country: 'Russia'
          },
        },
        {
          id: 3,
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-mBMoNIzZnnMP32KPoQECE2pSR8pNoMy8g&usqp=CAU',
          followed: false,
          fullName: 'Andrew',
          status: 'staff manager',
          location: {
            city: 'Kiev',
            country: 'Ukraine'
          },
        },
      ]
    )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={styles.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(u.id)
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>

}

export default Users