import React, { useEffect, userState, useState } from "react";
const UserDetails = () => {
    const [users, setUsers] = userState([]);
    const [loading, setLoading] = userState(true)
    const [error, seterror] = useState(false)
    function fetchUser() {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => seterror(error))
    }
    useEffect(() => {
        fetchUser();
        setLoading(false)
    }, [])
    console.log(users)
    return (
        <div>
            {loading && <p>Loading</p>}
            {error && <p>There is an error</p>}
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <div class="card" style={{ width: "18rem" }} key={index}>
                        <img src={user.picture.thumbnail} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">
                                {`${user.name.title} ${user.name.first} ${user.name.last}`}
                            </h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, ullam commodi quasi enim soluta beatae animi saepe quae eos autem pariatur, quod asperiores laborum distinctio molestiae voluptatem laudantium! Officia?</p>

                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}