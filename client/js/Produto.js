class Produto {
    
    constructor(id, nome, unidade) {
        
        this._id = id;
        this._nome = nome;
        this._unidade = unidade;
        Object.freeze(this);
    }
    
    get id() {
        
        return this._id;
    }
    
    get nome() {
        
        return this._nome;
    }
    
    get unidade() {
        
        return this._unidade;
    }
}