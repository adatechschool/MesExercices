// async function loadPosts(){
//     const res = await fetch('https://dummyjson.com/posts');
//     const data = await res.json();

    ////console.log(`Il y a ${data.posts.length} posts.`);
    ////console.log(`Le titre du premier post est ${data.posts[0].title}`);

    //document.body.innerHTML = `<h1>${data.posts.length} Posts</h1>`;

//     for(const post of data.posts){
//         document.body.innerHTML += `<h2>${post.title}</h2>`;
//         document.body.innerHTML += `<p>${post.body}</p>`;
//     }
// }

// loadPosts();

//Exo paramètre de chemin
// async function loadPosts(){
//     const res = await fetch('https://dummyjson.com/posts/5');
//     const data = await res.json();

//     console.log(data)
    
//     document.body.innerHTML = `<h1>Post ${data.id}</h1>`;
//     document.body.innerHTML += `<h2>${data.title}</h2>`;
//     document.body.innerHTML += `<p>${data.body}</p>`;    

// }

// loadPosts();

//Exo paramètre de requête
//Recherche d'un mot

// async function loadPosts(){
//     const res = await fetch('https://dummyjson.com/posts/search?q=love');
//     const data = await res.json();

//     console.log(data)
    
//     document.body.innerHTML = `<h1>${data.posts.length} Posts</h1>`;

//     for(const post of data.posts){
//         document.body.innerHTML += `<h2>${post.title}</h2>`;
//         document.body.innerHTML += `<p>${post.body}</p>`;
//     }
// }

// loadPosts();

//plusieur paramètres(tri par ordre alphabétique du titre)

async function loadPosts(){
    const res = await fetch('https://dummyjson.com/posts?sortBy=title&order=asc');
    const data = await res.json();

    console.log(data)
    
    document.body.innerHTML = `<h1>${data.posts.length} Posts</h1>`;

    for(const post of data.posts){
        document.body.innerHTML += `<h2>${post.title}</h2>`;
        document.body.innerHTML += `<p>${post.body}</p>`;
    }
}

loadPosts();