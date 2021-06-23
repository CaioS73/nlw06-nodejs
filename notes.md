
# TODO:
- Cadastro de tags (somente admin user)
- Cadastro de elogios (ID do destinatario, ID do remetente, ID da tag, data de criacao)
- Autenticacao de user (Gerar token JWT, Validar user logado)
- Listagem de users
- Listagem de tags
- Listagem de elogios p/ user


- GET    => Buscar info
- POST   => Inserir info
- PUT    => Alterar info
- DELETE => Remover info
- PATCH  => Alterar sub-info

#  PARAM TYPES:
- Routes params => http://localhost:3000/produtos/34
- Query params => http://localhost:3000/produtos?name=teclado&desc=ergonomico
- Body params (no corpo da req) => {
  "name": "teclado"
  "desc" : "ergonomico"
}


## Regras
- Cadastro de elogios
  - Nao e permitido um usuario cadastrar um elogio para si mesmo
  - Nao e permitido cadastrar elogios para usuarios invalidos
  - O usuario precisa estar autenticado