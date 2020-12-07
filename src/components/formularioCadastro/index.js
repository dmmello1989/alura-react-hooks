import { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onSubmit, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: { valid: true, text: "" }});

  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="Nome" 
        fullWidth 
        label="Nome" 
        value={nome}
        margin="normal" 
        variant="outlined" 
        onChange={e => setNome(e.target.value)}
      />
      <TextField 
        fullWidth 
        id="Sobrenome" 
        margin="normal" 
        label="Sobrenome" 
        value={sobrenome}
        variant="outlined" 
        onChange={e => setSobrenome(e.target.value)}
      />
      <TextField 
        id="CPF" 
        fullWidth 
        label="CPF" 
        value={cpf}
        margin="normal" 
        variant="outlined" 
        error={!erros.cpf.valid}
        onBlur={e => {
          const isValid = validarCPF(cpf);
          setErros({cpf: isValid});
        }}
        onChange={e => setCpf(e.target.value)}
        helperText={erros.cpf.text}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch 
            color="primary" 
            name="promoções" 
            checked={promocoes}
            onChange={e => setPromocoes(e.target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch 
            color="primary" 
            name="novidades" 
            checked={novidades}
            onChange={e => setNovidades(e.target.checked)}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default FormularioCadastro;