function formatUser(user) {
    return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
     // user=null;
    if (user) {
        return <h3>Hello,{formatUser(user)}! </h3>;
    }
    return <h1>Hello,Strong</h1>;
};
const user = {
    firstName: 'China',
    lastName: 'Arison'
};

const element = (
    <h1>
        Hello! {formatUser(user)}!
    </h1>
);

//ReactDOM.render(element, document.getElementById("app"));
ReactDOM.render(getGreeting(user), document.getElementById("app"));