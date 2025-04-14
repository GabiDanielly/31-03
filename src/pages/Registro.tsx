//pages/Registro.tsx
import Modal from "../components/Modal"
import { useState } from 'react';
export function Registro(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[modoModal, setModoModal]= useState<"novo" | "editar"|"excluir">("novo");
    const abrirModalNovo =()=>{
      setModoModal("novo");
      setIsModalOpen(true);
    }
    const abrirModalEditar =() => {
      setModoModal("editar");
      setIsModalOpen(true);
    }
    const abrirModalExcluir=()=>{
      setModoModal("excluir");
      setIsModalOpen(true);
    }


    return(
        <section  className="page">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Valor (R$)</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Compra Material de Escritório</td>
                        <td>08/12/2024</td>
                        <td>14:00</td>
                        <td>200,00</td>
                        <td>Pago</td>
                        <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                        <button id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Recebimento de Cliente</td>
                    <td>08/12/2024</td>
                    <td>12:23</td>
                    <td>1500,00</td>
                    <td>Recebido</td>
                    <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                    <button id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pagamento de Serviços</td>
                        <td>07/05/2024</td>
                        <td>10:30</td>
                        <td>750,00</td>
                        <td>Pago</td>
                        <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                        <button id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Recebimento do Cliente</td>
                        <td>07/05/2024</td>
                        <td>9:45</td>
                        <td>650,00</td>
                        <td>Recebido</td>
                        <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                        <button id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Recebimento de Impostos</td>
                        <td>06/05/2024</td>
                        <td>15:27</td>
                        <td>1345,23</td>
                        <td>Pago</td>
                        <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                        <button  id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Pagamento de emolumentos</td>
                        <td>06/05/2024</td>
                        <td>12:30</td>
                        <td>850,00</td>
                        <td>Pago</td>
                        <td><button id = "btEditDelet" onClick={abrirModalEditar}> Editar</button>
                        <button id = "btEditDelet" onClick ={abrirModalExcluir}>Deletar</button></td>
                    </tr>
                </tbody>
            </table>
            <div className="prtInferior">
            <div className="Ttpagos">
            <label>Total de Pagos</label>
            <input type="number"></input>
            </div>
        <div className="Ttrecebidos">
            <label>Total de Recebidos</label>
            <input type="number"></input>
        </div>
        <div className="Saldo">
            <label>Saldo</label>
            <input type="number"></input>
        </div>

        <div className="botão">
        <button onClick={abrirModalNovo}>Novo lançamento</button>
        </div>
    </div>
    <Modal isOpen={isModalOpen} 
    onClose={() => setIsModalOpen(false)}
    titulo={
      modoModal === "novo" ? "Novo lançamento" : modoModal=== "editar" ? "Editar":  "Excluir"}
    >
      {modoModal==="excluir" ? (
        <div style={{textAlign:"center"}}> <p>Você tem certeza que deseja excluir esse registro?</p></div>
      ): (
        <form>
          <div>
            <label>Descrição</label>
            <input type="text" />
          </div>
          <div>
            <label>Data</label>
            <input type="date" />
          </div>
          <div>
            <label>Hora</label>
            <input type="time" />
          </div>
          <div>
            <label>Valor</label>
            <input type="number" />
          </div>
          <div>
            <label>
              <input type="radio" name="tipo" value="Pago" /> Pago
            </label>
            <label>
              <input type="radio" name="tipo" value="Recebido" /> Recebido
            </label>
          </div>
        </form>
      )}
      </Modal>
      </section>

    )
  }
