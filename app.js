const sendBtn = document.querySelector(".send-message");
const chat = document.querySelector(".chats");

 const sendMessage = () => {
    const input = document.querySelector(".message-input input[type='text']");
    messageBody = input.value
    let newChat = document.createElement("div");
    newChat.innerHTML = `<p class="">${messageBody}
    </p>`
    newChat.classList += "chat-box right";
    chat.appendChild(newChat);

    setTimeout(() => {
        let newReply = document.createElement("div");
        newReply.innerHTML = `<p class=""> stop chatting me, I said i'll be there in 10mins, 
        </br>    fine</br>    </br>
        i'll be there in 6 six minutes, you happy now?
        </p>`
        newReply.classList += "chat-box left";
    
        chat.appendChild(newReply);
    }, 3000); 
    setTimeout(() => {
        let new2ndRelpy = document.createElement("div");
        new2ndRelpy.innerHTML = `<p class=""> it's time to gonback to the developers portfolio;
        </br>    </br>    </br>
        this links back to his site.
        => <a href="https://nwoko.netlify.app">nwoko victor</a>.
        </p>`
        new2ndRelpy.classList += "chat-box left";
    
        chat.appendChild(new2ndRelpy);
    }, 7000);
    
    input.value= null;
}






sendBtn.addEventListener("click", sendMessage);
