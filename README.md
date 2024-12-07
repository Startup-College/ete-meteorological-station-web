# ETE Meteorological Station Web

Este é o repositório da interface web para a estação meteorológica da ETE. Este projeto permite visualizar dados meteorológicos coletados de sensores conectados ao sistema.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** na versão **18.0** ou superior
- **Docker** e **Docker Compose**

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Startup-College/ete-meteorological-station-web.git
   cd ete-meteorological-station-web
   ```

2. **Crie o arquivo `.env`**

   No diretório raiz do projeto, crie um arquivo chamado `.env` e adicione as seguintes variáveis de ambiente, substituindo as URLs fictícias pelas URLs reais fornecidas:

   ```env
   VITE_PRODUCTION_API="https://api.meteorological-station.com/v1/"
   VITE_ICONS_URL="https://icons.meteorological-station.com/"
   ```

3. **Configure o ambiente**

   Execute o projeto utilizando **Docker Compose** para construir e rodar os containers:

   ```bash
   docker-compose up --build
   ```

## Uso

Após a configuração, o projeto estará disponível no navegador no endereço `http://localhost:3100` (ou na porta definida no arquivo de configuração do Docker Compose).

Certifique-se de que o servidor de API esteja em execução e acessível pelas URLs configuradas no `.env`.

---

Esperamos que este projeto seja útil! Se tiver dúvidas, entre em contato ou abra uma issue. 🚀
