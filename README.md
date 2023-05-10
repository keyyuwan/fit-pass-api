# App

GymPass style app

## 🛠 Requisitos funcionais

**Autenticação e Cadastro**

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;

**Usuário**

- [x] Deve ser possível obter o perfil de um usuário logado;

**Check-in**

- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;

**Academia**

- [x] Deve ser possível o usuário buscar por academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível cadastrar uma academia;

## 📄 Regras de negócio

**Usuário**

- [x] O usuário não pode se cadastrar com e-mail duplicado;

**Check-in**

- [x] O usuário não pode realizar 2 check-ins no mesmo dia;
- [x] O usuário não pode realizar check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;

**Academia**

- [x] A academia só pode ser cadastrada por administradores;

## 👨‍💻 Requisitos não-funcionais

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser indentificado por um JWT;
