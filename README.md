# App

GymPass style app

## 🛠 Requisitos funcionais

**Autenticação e Cadastro**

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;

**Usuário**

- [ ] Deve ser possível obter o perfil de um usuário logado;

**Check-in**

- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;

**Academia**

- [ ] Deve ser possível o usuário buscar por academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível cadastrar uma academia;

## 📄 Regras de negócio

**Usuário**

- [x] O usuário não pode se cadastrar com e-mail duplicado;

**Check-in**

- [ ] O usuário não pode realizar 2 check-ins no mesmo dia;
- [ ] O usuário não pode realizar check0in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;

**Academia**

- [ ] A academia só pode ser cadastrada por administradores;

## 👨‍💻 Requisitos não-funcionais

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser indentificado por um JWT;
