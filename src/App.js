import './App.css';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/formularioCadastro';

function App() {
  const onSubmit = (data) => {
    console.log({data})
  }

  const validarCPF = (cpf) => {
    if(cpf.length !== 11) {
      return { valid: false, text: "CPF deve ser composto por 11 dígitos" }
    } else if(!Number(cpf)) {
      return { valid: false, text: "CPF deve ser composto apenas por números" }
    } else {
      return { valid: true }
    }
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" >
        Formulário de cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
