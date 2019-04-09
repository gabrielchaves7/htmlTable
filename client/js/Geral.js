class Geral {
    
    adicionaProduto(event) {
        
        event.preventDefault();
      
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );
            
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value  
        );
        
        console.log(negociacao);
    }
}