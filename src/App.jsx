import './App.css';

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    photo: 'johndoe.jpg'
};

function App() {
    return (
        <div className="App">
            <div className="person">
                <img src="images/johndoe.jpg" />
                <div className="data">
                    <div className="name">
                        {person.firstName} {person.lastName}
                    </div>
                    <div className="age">{person.age}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
