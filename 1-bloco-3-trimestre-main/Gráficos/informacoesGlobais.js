const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O câncer de mama é o tipo de câncer mais comum entre as mulheres no Brasil e no mundo. Ao decorrer dos anos os casos vem aumentando, por isso, é de extrema importância fazer os exames preventivos.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

