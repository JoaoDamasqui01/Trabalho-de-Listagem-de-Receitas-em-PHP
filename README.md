## 🛠️ Guia de Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

### 1. Preparação Inicial

* **Download:** Realize o download do projeto completo para sua máquina.
* **Organização:** Mova a pasta da **API SpringBoot** para um diretório fora da pasta principal do projeto (mantenha-a como uma pasta raiz independente).

### 2. Configuração do Banco de Dados

* Localize o arquivo `confeitaria3.sql`.
* Abra o seu gerenciador de banco de dados (MySQL Workbench, pgAdmin, etc.).
* **Execute o script** para criar a estrutura e popular os dados necessários no seu `localhost`.

### 3. Ajustes na API (Back-end)

Para que a API se conecte corretamente ao seu banco e permita o acesso da interface, realize as seguintes alterações:

* **Conexão com o Banco:** Vá em `src/main/resources/application.properties` e atualize as credenciais (usuário, senha e URL do banco) de acordo com as configurações do seu ambiente local.
* **Configuração de CORS:**
* Localize a pasta ou pacote chamado `CORS` (ou onde as configurações de segurança residem).
* No arquivo de configuração de conexão, localize a linha `.allowedOrigins("http://localhost:3000")`.
* Certifique-se de que a porta informada corresponde à porta onde sua interface (Front-end) será executada.



### 4. Execução

1. **Instalação de Dependências:** Abra o terminal (CMD ou PowerShell) na pasta da interface e execute o comando de instalação de pacotes (ex: `npm install`).
2. **Rodar a API:** Inicie a aplicação SpringBoot através da sua IDE ou via terminal.
3. **Rodar a Interface:** Inicie o front-end para validar a conexão.

---

> **Nota:** Certifique-se de que o serviço do seu banco de dados esteja ativo antes de rodar a API para evitar erros de conexão.

**Gostaria que eu formatasse esse guia em um arquivo `README.md` completo para você colocar no seu repositório?**
