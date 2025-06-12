import { useState } from 'react'

const cantadaAmorosa = () =>{
    const[nome, setNome] = useState("");
    const cantadas = [
        "Você é Wi-Fi? Porque estou sentindo uma conexão!",
        "Se eu fosse um gato, passaria todas as minhas sete vidas ao seu lado.",
        "Você é um empréstimo? Porque você tem meu interesse!",
        "Se você fosse uma lágrima, eu nunca choraria para não te perder.",
        "Você é um mago? Porque sempre que você está por perto, tudo fica mágico!",
        "Se eu pudesse rearranjar o alfabeto, colocaria U e I juntos.",
        "Você é um estacionamento? Porque você tem 'vaga' no meu coração!",
        "Você é a razão pela qual eu sorrio todos os dias.",
        "Você é um dicionário? Porque você dá significado à minha vida!",
        "Se eu fosse um pintor, você seria minha obra-prima."
    ];


    const [frase, setFrase] = useState('👀 Coloque o nome do seu crush');
    const numero = Math.floor(Math.random() * 10);

    const verificaNome = () =>{
        if (nome =='' ){
            setFrase ('Preencha o nome do seu crush.')
        }
        else{
            setFrase(nome + ', ' + cantadas[numero] + ' 💖');
        }
    }   

    return (
        <div className="container">
            <h2 className="titulo"> 💕Cantadas amorosas para sua crush </h2>
            <input type="text"
             placeholder="Nome do seu crush"
             value={nome}
             onChange={(e) => setNome(e.target.value)}/>
            <button onClick={() => verificaNome()}>Gerar cantadas</button>
            <p>{frase}</p>
        </div>
    )
} 

export default cantadaAmorosa;

    