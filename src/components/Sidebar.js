import React, { useState } from "react"

export default function Sidebar() {

    const imagemPadrao = "./assets/loki.jpg"
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState(imagemPadrao)

    const sugestions = [
        {
            src: "./assets/Hella.jpg",
            title: "Hella"
        },
        {
            src: "./assets/thanos.jpg",
            title: "Thanos"
        },
        {
            src: "./assets/venon.jpg",
            title: "Venon"
        },
        {
            src: "./assets/ego.jpg",
            title: "Ego"
        },
        {
            src: "./assets/gor.jpg",
            title: "Gor"
        }
    ]

    function inserirNome() {
        setNome(prompt("Qual é o seu nome?"))
    }

    function inserirImagem() {
        const imagemAdicionada = prompt("Escolha o link da sua imagem")
        setImagem(imagemAdicionada)
    } 

    const sugestionsRender = sugestions.map((sugestion) => {
        return <Sugestion src={sugestion.src} title={sugestion.title} />
    })

    return (
        <div class="sidebar">
            <div data-test="user" class="profile">
                <img data-test="profile-image" onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} />
                <div class="info">
                    <b>Sylvie</b>
                    <div class="row">
                        <p data-test="name" >{!nome ? "Loki_Sylvie" : `${nome}`}</p>
                        <ion-icon data-test="edit-name" onClick={inserirNome} name="pencil-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <br />
            <div class="sugestions">
                <div class="see-all">
                    <p>Sugestões para você</p>
                    <b>Ver tudo</b>
                </div>
                <>
                    {sugestionsRender}
                </>
            </div>
            <div class="about">
                <p>Sobre · Ajuda · API · Carreiras · Privacidade ·</p>
                <p>Termos · Localizações · Contas mais relevantes · Hashtags ·</p>
                <p>Idioma</p>
                <br /><br />
                <p>© 2022 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}


function Sugestion(props) {
    return (
        <div class="sugestion">
            <img alt="" src={props.src} />
            <div class="info">
                <b>{props.title}</b>
                <p>Segue você</p>
            </div>
            <p class="seguir">seguir</p>
        </div>
    );
}