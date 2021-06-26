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


## Notes
- Biblioteca cors pra colocar front end