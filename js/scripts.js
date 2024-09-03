const titolo = document.getElementById("titolo");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const link = document.getElementById("link");
const Link = document.getElementById("Link");
const conteiner = document.querySelector(".conteiner");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const btn = document.getElementById("btn");
const pU = document.querySelector("#pU");
const pE = document.querySelector("#pE");
const pS = document.querySelector("#pS");

const conteiner2 = document.querySelector(".conteiner2");
const email2 = document.querySelector("#email2");
const senha2 = document.querySelector("#senha2");
const btn2 = document.querySelector("#btn2");
const pE2 = document.querySelector("#pE2");
const pS2 = document.querySelector("#pS2");

const listasUsers = {
    userlist: [],
    emaillist: [],
    senhaslist: []
}
const listasUsers2 = {
    listasDeEmails: [],
    listasDeSenhas: []
};
const adicionado = {};
const adicionado2 = {};
const removedor = {};
const list = [];
console.log(list);

img1.addEventListener("click", () => {
    img1.style.display = "none";
    img2.style.display = "flex";
    senha.setAttribute("type", "text");

});

img2.addEventListener("click", () => {
    img2.style.display = "none";
    img1.style.display = "flex";
    senha.setAttribute("type", "password");
});

img3.addEventListener("click", () => {
    img3.style.display = "none";
    img4.style.display = "flex";
    senha2.setAttribute("type", "text");
});

img4.addEventListener("click", () => {
    img3.style.display = "flex";
    img4.style.display = "none";
    senha2.setAttribute("type", "password");
});

link.addEventListener("click", (e) => {
    e.preventDefault();

    conteiner.style.display = "flex";
    conteiner2.style.display = "none";
    Link.style.display = "none";
});

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (listasUsers.senhaslist[0].length < 8) {
        user.style.border = "solid 3px red";
        email.style.border = "solid 3px red";
        senha.style.border = "solid 3px red";

    } else if (!listasUsers.userlist[0] || !listasUsers.emaillist[0] || !listasUsers.senhaslist[0]) {
        user.style.border = "solid 3px red";
        email.style.border = "solid 3px red";
        senha.style.border = "solid 3px red";
    } else {
        listasUsers2.listasDeEmails.push(listasUsers.emaillist);
        listasUsers2.listasDeSenhas.push(listasUsers.senhaslist);
        list.push(listasUsers2.listasDeEmails[0]);
        list.push(listasUsers2.listasDeSenhas[0]);
        setTimeout(() => {
            if(listasUsers2.listasDeEmails.length === 1 || listasUsers2.listasDeSenhas.length === 1) {
                list.push("Validados");
                list.push("Validados1");
            };
        }, 1);
        console.log(listasUsers2);
        console.log(list);
        conteiner.style.display = "none";
        conteiner2.style.display = "flex";
        Link.style.display = "flex";
    }
});

user.addEventListener("blur", () => {
    const userValue = user.value;

    if (!userValue) {
        user.style.border = "solid 3px red";
        pU.innerHTML = "prencha este campo!!"
        pU.style.color = "red";
        setTimeout(() => {
            user.style.border = "none";
            pU.innerHTML = "";
        }, 1000);
    } else {
        user.style.border = "solid 3px green";
        listasUsers.userlist.push(userValue);

    }
});

email.addEventListener("blur", () => {
    const emailValue = email.value;
    const Gmail = emailValue.split('@gmail.com');
    console.log(Gmail);

    if (!emailValue) {
        email.style.border = "solid 3px red";
        pE.innerHTML = "prencha este campo!!"
        pE.style.color = "red";
        
        setTimeout(() => {
            email.style.border = "none";
            pE.innerHTML = "";
        }, 4000);
    } else if (Gmail.length === 1) {
        email.style.border = "solid 3px yellow"
        pE.innerHTML = "O Gmail precissa ter os seguintes valores que são: (@gmail.com)";
        pE.style.color = "yellow";
        
        setTimeout(() => {
            email.style.border = "none";
            pE.innerHTML = "";
        }, 4000);
    } else if (Gmail.length === 2) {
        email.style.border = "solid 3px green";
        listasUsers.emaillist.push(emailValue);

    }
});

senha.addEventListener("blur", () => {
    const senhaValue = senha.value;

    if (!senhaValue) {
        senha.style.border = "solid 3px red";
        pS.innerHTML = "prencha este campo!!"
        pS.style.color = "red";
        setTimeout(() => {
            senha.style.border = "none";
            pS.innerHTML = "";
        }, 1000);
    } else if (senhaValue.length < 8) {
        senha.style.border = "solid 3px yellow";
        pS.innerHTML = "A senha precisa ter no minimo 8 letras!!";
        pS.style.color = "yellow";
        listasUsers.senhaslist.push(senhaValue);
        if (listasUsers.senhaslist.length === 1) {
            listasUsers.senhaslist.pop(senhaValue);
        };
        setTimeout(() => {
            user.style.border = "none";
            email.style.border = "none";
            senha.style.border = "none";
            pS.innerHTML = "";
        }, 4000);
    } else {
        senha.style.border = "solid 3px green";
        if (listasUsers.senhaslist.length === 0) {
            listasUsers.senhaslist.push(senhaValue);
        }
    }
    console.log(listasUsers);
});


btn2.addEventListener("click", (e) => {
    e.preventDefault();
    const Email3 = email2.value;
    const Senha3 = senha2.value;

    if (list.length === 6) {
        console.log("ok");
        console.log("1");
        titolo.style.display = "flex";
        Link.style.display = "none";
        conteiner2.style.display = "none";


    } else if (list[1] != Email3 && list[2] != Senha3) {
        console.log("email e senha estão errados");
        senha2.style.border = "solid 3px red";
        email2.style.border = "solid 3px red";
    } else if(list.length === 3) {
        list.push("Validados1");
    }

});

email2.addEventListener("blur", () => {
    const EMAILL = email2.value;
    console.log(list);
    console.log(EMAILL);

    if (EMAILL == list[0]) {
        email2.style.border = "solid 3px green";
        console.log("1");
        if(list.length === 4 || list.length === 5) {
            list.push("emailchecado");
        }else if(list.length === 3) {
            list.push("Validados1");
        };

    } else if (list[null] || !EMAILL) {
        email2.style.border = "solid 3px red";
        pE2.innerHTML = "prencha este campo!!";
        pE2.style.color = "red";
        setTimeout(() => {
            email2.style.border = "none";
            pE2.innerHTML = "";
        }, 1000);
        setTimeout(() => {
            if (list.length === 4 && 3) {
                list.pop("Validados");
            };
        }, 1);
    } else if (EMAILL !== list[0]) {
        email2.style.border = "solid 3px red";
        pE2.innerHTML = "Email invalido!!";
        setTimeout(() => {
            email2.style.border = "none";
            pE2.innerHTML = "";
        }, 1000);
        setTimeout(() => {
            if (list.length === 4 || list.length === 3) {
                list.pop("Validados");
            };
        }, 1);
    }
});

senha2.addEventListener("blur", () => {
    const SENHASS = senha2.value;
    console.log(list);
    console.log(SENHASS);

    if (SENHASS == list[1]) {
        senha2.style.border = "solid 3px green";
        console.log("2");
        if(list.length === 5 || list.length === 4) {
            list.push("senhachecada");
        }else if(list.length === 3) {
            list.push("Validados1");
        };

    } else if (list[null] || !SENHASS) {
        senha2.style.border = "solid 3px red";
        pS2.innerHTML = "prencha este campo!!";
        pS2.style.color = "red";
        setTimeout(() => {
            senha2.style.border = "none";
            pS2.innerHTML = "";
        }, 1000);
        setTimeout(() => {
            if (list.length === 4 && 3) {
                list.pop("Validados1");
            };
        }, 1);

    } else if (SENHASS !== list[1]) {
        senha2.style.border = "solid 3px red";
        pS2.innerHTML = "Senha invalida!!";
        setTimeout(() => {
            senha2.style.border = "none";
            pS2.innerHTML = "";
        }, 1000);
        setTimeout(() => {
            if (list.length === 4 || list.length === 3) {
                list.pop("Validados1");
            };
        }, 1);
    }
    console.log(list);
});