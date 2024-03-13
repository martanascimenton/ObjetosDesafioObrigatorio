
class Tarefa {
    constructor(id, descricao, status = 'pendente') {
      this.id = id;
      this.descricao = descricao;
      this.status = status;
    }
     
    concluir() {
      this.status = 'concluída';
      console.log(`Tarefa ${this.id}: ${this.descricao} concluída.`);
    }
  
    reabrir() {
      this.status = 'pendente';
      console.log(`Tarefa ${this.id}: ${this.descricao} reaberta.`);
    }
  }
  
  const tarefa1 = new Tarefa(1, 'Fazer compras');
  
  tarefa1.concluir(); 
  
  tarefa1.reabrir(); 
  