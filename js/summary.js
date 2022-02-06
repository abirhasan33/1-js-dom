const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for(const blog of blogs){
    // console.log(blog);
    blog.style.background="steelblue"
    blog.style.color="white"
    blog.style.padding="10px 15px"
}

const harun = document.getElementById('spesela');
// harun.innerText="I am hrun ";
harun.innerHTML=`
    <h4> Special inner html</h4>
    <div>
    <ul>
    <li> ami pari na jante </li>
    <li> ami pari na khaite </li>
     </ul>
     </div>
`


const friends = document.getElementById('friends');
const fifth = friends.children[5];
friends.removeChild(fifth);
console.log(fifth);

// cerate elemant 
const friend = document.createElement('li');
friend.innerText="frends-11";
friends.appendChild(friend)

const amar = document.createElement('li');
amar.innerText='firends-12';
friends.appendChild(amar);


