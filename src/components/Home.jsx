import React from "react";
import "./Home.scss"

export default function Home(){
    return(
        <div className="container">
            <main>
                <h1>Imagem da solução</h1>
            </main>
            <aside className="aside1">
                <h2>O que é a solução</h2>
            </aside>
            <aside className="aside2">
                <h2>O que ela fará</h2>
            </aside>
            <aside className="aside3">
                <h2>Como funcionará</h2>
            </aside>
            <article className="article1">
                <h2>Dream Watch</h2>
            </article>
            <article className="article2">
                <h2>Texto sobre a solução (20 a 30 palavras)</h2>
            </article>
        </div>
    )
}