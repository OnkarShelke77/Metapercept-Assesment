document.addEventListener('DOMContentLoaded',function(){
    fetch('class.json')
    .then(Response => Response.json())
    .then(data =>{
        const userList=document.getElementById('user-list');
        data.forEach(user =>{
            const userItem=document.createElement('div');
            userItem.classList.add('user-item');
            userItem.innerHTML=`
            <h2>${user.iD}</h2>
            <img>${user.ImageUrl}</img>
            <h2>Name: ${user.Name}</h2>
            <p>ShortDesc": "This course focuses to ensure your documentation-type content is easy to manage and consume. This skill builder covers useful techniques to surface relevant documentation and standardize your content using templates and blueprints. It includes how to set up a knowledge-base in Confluence for self- service customer support in JIRA Service Desk. It is useful for both Confluence Server Administrators and Confluence Cloud Administrators.</p>
            `;
            userList.appendChild(userItem);
        });
    })
    .catch(error => console.error(error))
});