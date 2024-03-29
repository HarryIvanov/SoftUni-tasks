async function solution() {
    try {
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`
        let response = await fetch (url);

        if (!response.ok ) {
            throw new Error ('Error obtaining list')
        }
        let data = await response.json();

        data.forEach(articleInfo => {
            let articleElement = document.createElement('div');
            articleElement.classList.add('accordion');
            articleElement.innerHTML = 
            `
            <div class="head">
                <span>${articleInfo.title}</span>
                <button class="button" id="${articleInfo._id}" onclick="MoreOnclick(event)">More</button>
            </div>
            <div class="extra"></div>    
            `
            let main = document.getElementById('main')
            main.appendChild(articleElement);

        });

    } catch (error) {
        console.log(error);
    }
}
async function MoreOnclick(event) {
    try {
        let currentTarget = event.currentTarget;
        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra')
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/` + event.currentTarget.id;
        let response = await fetch (url);
        if (!response.ok ) {
            throw new Error ('Error obtaining article details')
        }
        let data = await response.json();
        extraDiv.innerHTML = `<p>${data.content}</p>`
        if (currentTarget.textContent == "More") {
            currentTarget.textContent = "Less";
            extraDiv.style.display = 'block'
        } else {
            currentTarget.textContent = "More"
            extraDiv.style.display = 'none'
        }

    } catch (error) {
        console.log(error);
    }
}

solution();