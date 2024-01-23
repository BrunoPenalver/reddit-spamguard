export {}

const removePosts = () =>
{
    const posts = document.getElementsByClassName("_1Qs6zz6oqdrQbR7yE_ntfY");

    for (const post of posts) 
    {
        const textPost = post.textContent.toLowerCase();
        
        if(textPost.includes("promocionado") || textPost.includes("promoted")  )
        {
            console.log("Post removido");
            post.remove();
        }
    }
}


const main = () =>
{
    removePosts();
    
    setInterval(() => 
    {   
        removePosts();
    }, 500);
}

main();