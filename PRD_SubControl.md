# Product Requirements Document (PRD) - SubControl

## 1. Visão Geral

### 1.1 Propósito
O SubControl é uma plataforma de gerenciamento de assinaturas que permite aos usuários monitorar seus gastos com serviços digitais, oferecendo insights sobre consumo, notificações de renovação e ferramentas para otimização financeira.

### 1.2 Público-Alvo
- Consumidores com múltiplas assinaturas digitais
- Pessoas que buscam controle financeiro
- Usuários que desejam otimizar gastos com serviços digitais

### 1.3 Objetivos do Produto
- Centralizar a gestão de múltiplas assinaturas em uma única plataforma
- Fornecer análises e insights financeiros para auxiliar na tomada de decisões
- Reduzir gastos desnecessários com renovações automáticas
- Melhorar a experiência do usuário no gerenciamento financeiro de serviços digitais

## 2. Requisitos Funcionais

### 2.1 Autenticação e Gerenciamento de Usuários
- **Cadastro de usuários**
  - Nome completo, e-mail, senha, data de nascimento
  - Verificação de e-mail
  - Aceitação de termos de uso
- **Login**
  - Autenticação por e-mail/senha
  - Opção "Lembrar-me"
  - Recuperação de senha
- **Perfil do usuário**
  - Visualização e edição de informações pessoais
  - Alteração de senha
  - Configurações de notificações
  - Preferências de tema (claro, escuro, sistema)

### 2.2 Gestão de Plataformas
- **Catálogo de plataformas**
  - Lista predefinida de serviços com logotipos, categorias e planos comuns
  - Busca por nome ou categoria
- **Categorização**
  - Streaming (Netflix, Disney+, HBO Max, etc.)
  - Social (LinkedIn Premium, Twitter Blue, etc.)
  - Gaming (Xbox Game Pass, PlayStation Plus, etc.)
  - Produtividade (Microsoft 365, Adobe Creative Cloud, etc.)
  - Música (Spotify, Apple Music, etc.)
  - Outros

### 2.3 Gestão de Assinaturas
- **Adição de assinaturas**
  - Seleção da plataforma
  - Definição de plano (mensal, anual)
  - Valor da assinatura
  - Data de cobrança
  - Método de pagamento (tipo)
  - Definição de categoria personalizada (opcional)
- **Edição/Remoção de assinaturas**
  - Atualização de valores
  - Alteração de datas
  - Marcação como "cancelada" (para análise de economia)
- **Visualização detalhada**
  - Histórico de preços
  - Próxima data de cobrança
  - Total gasto na plataforma até o momento

### 2.4 Dashboard
- **Visão geral financeira**
  - Gasto total com assinaturas (mensal e anual)
  - Gasto por categoria
  - Evolução de gastos (gráfico temporal)
- **Indicadores de alerta**
  - Assinaturas a vencer nos próximos 7 dias
  - Mudanças de preço detectadas
  - Assinaturas não utilizadas (integração futura)
- **Análise de economia**
  - Total economizado com assinaturas canceladas
  - Sugestões de otimização (ex: trocar plano mensal por anual)
- **Insights personalizados**
  - Aumento/diminuição de gastos comparado ao mês anterior
  - Análise de categorias com maior crescimento
  - Previsão de gastos para o próximo mês/ano

### 2.5 Sistema de Notificações
- **Tipos de notificações**
  - Renovação próxima (3 dias antes)
  - Assinatura renovada
  - Aumento de preço detectado
  - Sugestões de economia
- **Canais de notificação**
  - E-mail
  - Notificações in-app
  - Push notifications (implementação futura)
- **Configurações de notificações**
  - Ativação/desativação por tipo
  - Frequência (diária, semanal, apenas eventos importantes)

### 2.6 Preferências e Configurações
- **Temas visuais**
  - Modo claro
  - Modo escuro
  - Seleção automática (baseado no sistema)
- **Configurações de privacidade**
  - Controle sobre dados compartilhados
  - Opções de exclusão de conta
- **Idioma e região**
  - Formato de data e moeda
  - Idioma da interface (implementação futura)

## 3. Requisitos Não-Funcionais

### 3.1 Desempenho
- Tempo de carregamento da dashboard < 2 segundos
- Resposta de API < 500ms para operações principais
- Suporte a pelo menos 1000 usuários simultâneos

### 3.2 Segurança
- Criptografia de dados sensíveis
- Autenticação robusta com proteção contra ataques comuns
- Conformidade com LGPD
- Backup regular de dados

### 3.3 Usabilidade
- Interface responsiva (desktop, tablet, mobile)
- Design intuitivo com baixa curva de aprendizado
- Acessibilidade (WCAG 2.1 nível AA)
- Feedback visual para todas as ações importantes

### 3.4 Confiabilidade
- Disponibilidade de 99.9% (downtime máximo de 8.7 horas/ano)
- Recuperação automática em caso de falhas
- Modo offline limitado (implementação futura)

### 3.5 Escalabilidade
- Arquitetura que suporte crescimento orgânico de usuários
- Banco de dados otimizado para consultas frequentes
- Infraestrutura adaptável ao volume de dados

## 4. Jornadas do Usuário

### 4.1 Onboarding
1. Usuário acessa a plataforma e realiza cadastro
2. Recebe e-mail de confirmação e ativa a conta
3. É direcionado para um tutorial rápido
4. Adiciona sua primeira assinatura
5. Visualiza a dashboard inicial com informações básicas

### 4.2 Adição de Nova Assinatura
1. Usuário acessa a seção "Minhas Assinaturas"
2. Clica em "Adicionar Nova Assinatura"
3. Seleciona a plataforma do catálogo ou adiciona manualmente
4. Preenche detalhes (valor, plano, data de cobrança)
5. Confirma a adição e visualiza na lista de assinaturas

### 4.3 Recebimento de Notificação
1. Sistema detecta renovação próxima
2. Envia notificação por e-mail e in-app
3. Usuário visualiza notificação
4. Acessa detalhes da assinatura através da notificação
5. Decide manter ou cancelar a assinatura

### 4.4 Análise Financeira Mensal
1. Usuário acessa a dashboard
2. Visualiza gastos do mês atual vs. mês anterior
3. Acessa gráficos detalhados por categoria
4. Recebe insights personalizados
5. Implementa sugestões de economia

## 5. Arquitetura Técnica

### 5.1 Backend
- NestJS como framework principal
- Prisma ORM para acesso ao banco de dados
- PostgreSQL como banco de dados relacional
- Sistema de filas para processamento de notificações
- API RESTful documentada com Swagger

### 5.2 Frontend (a implementar)
- Next.js com TypeScript
- Componentes reutilizáveis com Styled Components ou Tailwind CSS
- Gerenciamento de estado com Context API ou Redux
- Gráficos interativos com Chart.js ou D3.js
- Layout responsivo e acessível

### 5.3 Infraestrutura
- Hospedagem em nuvem (AWS ou similar)
- CI/CD automatizado
- Monitoramento e alertas
- Backups automáticos
- Ambiente de desenvolvimento, homologação e produção

## 6. Métricas de Sucesso

### 6.1 Engajamento
- Usuários ativos diários (DAU)
- Tempo médio na plataforma
- Taxa de cadastro de assinaturas por usuário
- Frequência de acesso

### 6.2 Satisfação
- Net Promoter Score (NPS)
- Taxa de retenção mensal
- Feedback in-app
- Avaliações em lojas de aplicativos (versão futura)

### 6.3 Negócio
- Total de usuários ativos
- Taxa de conversão (freemium para premium, implementação futura)
- Custo de aquisição de cliente (CAC)
- Valor do tempo de vida do cliente (LTV)

## 7. Roadmap de Implementação

### 7.1 Fase 1: MVP (1-3 meses)
- Sistema de autenticação completo
- CRUD básico de assinaturas
- Dashboard com informações essenciais
- Notificações por e-mail
- Interface responsiva básica

### 7.2 Fase 2: Aprimoramento (3-6 meses)
- Sistema de insights avançados
- Notificações in-app
- Categorização avançada
- Melhorias na UX/UI
- Personalização de temas

### 7.3 Fase 3: Expansão (6-12 meses)
- Aplicativo móvel
- Análises preditivas
- Integrações com bancos e cartões de crédito
- Versão premium com recursos avançados
- Comunidade e compartilhamento de dicas

## 8. Considerações Futuras

### 8.1 Oportunidades de Expansão
- Integração direta com APIs de plataformas
- Detecção automática de assinaturas via e-mail/SMS
- Cancelamento automatizado de serviços
- Recomendações de alternativas mais econômicas
- Versão para empresas (gerenciamento de SaaS)

### 8.2 Monetização Potencial
- Modelo freemium com recursos premium
- Parcerias com plataformas (referral)
- API para integração com apps de finanças pessoais
- Versão empresarial

## 9. Riscos e Mitigações

### 9.1 Riscos Identificados
- Baixa adoção inicial
- Dificuldade na manutenção manual de assinaturas
- Concorrência de apps de finanças existentes
- Mudanças nas políticas de privacidade que afetam integração

### 9.2 Estratégias de Mitigação
- Marketing focado em casos de uso específicos
- UX simplificada para reduzir fricção
- Diferenciação através de insights avançados
- Monitoramento constante de regulações de privacidade

## 10. Apêndices

### 10.1 Pesquisa de Mercado
- Análise da concorrência
- Tamanho do mercado potencial
- Tendências em assinaturas digitais

### 10.2 Glossário
- Termos técnicos específicos
- Métricas utilizadas

## 11. Lista de Tarefas Backend (Reorganizada)

### Tarefas Principais

#### Módulo de Autenticação e Perfil
1. Implementar cadastro e autenticação de usuários ✅ - Complexidade: 3
   1.1 Cadastro básico com email/senha ✅ - Complexidade: 2
   1.2 Autenticação com JWT ✅ - Complexidade: 2
   1.3 Validação para termos de uso ✅ - Complexidade: 1

2. Gerenciamento de perfil e preferências ❌ - Complexidade: 5
   2.1 Endpoints para gerenciamento de perfil - Complexidade: 3
   2.2 API de atualização de dados pessoais - Complexidade: 2
   2.3 API para alteração de senha - Complexidade: 2
   2.4 Configurações de temas - Complexidade: 2
   2.5 Configurações de notificações - Complexidade: 3
      2.5.1 Criar modelo de dados para preferências - Complexidade: 2
      2.5.2 Desenvolver endpoints para gerenciamento - Complexidade: 2
      2.5.3 Implementar persistência de preferências - Complexidade: 1
   2.6 Configurações de formato de data/moeda - Complexidade: 2

<!-- 3. Gerenciamento de privacidade e dados ❌ - Complexidade: 5 
   3.1 Endpoints para gerenciamento de privacidade - Complexidade: 2
   3.2 Controle de dados compartilhados - Complexidade: 3
   3.3 API para exportação de dados - Complexidade: 3
   3.4 Log de acesso aos dados - Complexidade: 2
   3.5 Funcionalidade de exclusão de conta - Complexidade: 5
      3.5.1 Endpoint para solicitação de exclusão - Complexidade: 2
      3.5.2 Anonimização de dados - Complexidade: 3
      3.5.3 Processo de backup antes da exclusão - Complexidade: 2
      3.5.4 Registro de motivo de saída - Complexidade: 1
      3.5.5 Período de recuperação da conta - Complexidade: 3 -->

#### Módulo de Plataformas e Assinaturas
4. Gerenciamento de plataformas ✅ - Complexidade: 3
   4.1 Banco de dados de plataformas ✅ - Complexidade: 2
   4.2 Endpoints para gestão de plataformas ✅ - Complexidade: 3
   4.3 Categorização de plataformas ✅ - Complexidade: 2
   4.4 API de busca e filtros ✅ - Complexidade: 3
      4.4.1 Busca por nome ✅ - Complexidade: 2
      4.4.2 Filtro por categoria ✅ - Complexidade: 2
   4.5 Planos comuns pré-cadastrados (seed) ❌ - Complexidade: 2
   4.6 Sistema de sugestão de novas plataformas ❌ - Complexidade: 5
      4.6.1 Modelo de dados para sugestões - Complexidade: 2
      4.6.2 Validação de dados enviados - Complexidade: 1
      4.6.3 Endpoints para aprovação/rejeição - Complexidade: 3
      4.6.4 Notificação de aprovação - Complexidade: 2
      4.6.5 Serviço para adicionar plataforma ao catálogo - Complexidade: 2
   4.7 Histórico de preços por plataforma ❌ - Complexidade: 6
      4.7.1 Modelo de dados para histórico de preços - Complexidade: 2
      4.7.2 API para registro de alterações oficiais - Complexidade: 2
      4.7.3 Endpoints para consulta de histórico - Complexidade: 2
      4.7.4 Filtros e ordenação do histórico - Complexidade: 2
      4.7.5 Notificação de alteração de preço base - Complexidade: 3

5. Gerenciamento de assinaturas ✅ - Complexidade: 5
   5.1 Modelo de dados para assinaturas ✅ - Complexidade: 3
   5.2 API para CRUD de assinaturas ✅ - Complexidade: 4
      5.2.1 Adição de assinatura ✅ - Complexidade: 2
      5.2.2 Listagem de assinaturas ✅ - Complexidade: 2
      5.2.3 Edição de assinaturas ✅ - Complexidade: 3
      5.2.4 Cancelamento de assinaturas ✅ - Complexidade: 2
   5.3 Validação de dados ✅ - Complexidade: 3
      5.3.1 Seleção de plataforma ✅ - Complexidade: 1
      5.3.2 Tipos de plano (mensal/anual) ✅ - Complexidade: 2
      5.3.3 Valor da assinatura ✅ - Complexidade: 1
      5.3.4 Data de cobrança ✅ - Complexidade: 2
      5.3.5 Método de pagamento ❌ - Complexidade: 2
   5.4 Categorias personalizadas (API) ❌ - Complexidade: 3
   5.5 Valor personalizado (custom value) ❌ - Complexidade: 3
      5.5.1 Campo para valor personalizado - Complexidade: 1
      5.5.2 Lógica para substituir preço padrão - Complexidade: 2
      5.5.3 Tratamento em relatórios e dashboards - Complexidade: 2
   5.6 Sistema de compartilhamento de assinaturas ❌ - Complexidade: 8
      5.6.1 Modelo de dados para compartilhamento - Complexidade: 3
      5.6.2 API para adicionar/remover participantes - Complexidade: 3
      5.6.3 Cálculo de divisão de valores - Complexidade: 2
      5.6.4 Flag para exibir como compartilhada sem dividir valor - Complexidade: 1
      5.6.5 Notificações para participantes - Complexidade: 3
      5.6.6 Visualização de assinaturas compartilhadas - Complexidade: 2

#### Módulo de Dashboard e Análises
6. API para dashboard unificada ✅ - Complexidade: 8
   6.1 API para dados da dashboard principal ✅ - Complexidade: 3
   6.2 Cálculo de gasto total (mensal e anual) ✅ - Complexidade: 3
   6.3 API de gastos por categoria ❌ - Complexidade: 3
      6.3.1 Lógica de agregação por categoria - Complexidade: 2
      6.3.2 Endpoint para dados categorizados - Complexidade: 1
      6.3.3 Cache para resultados frequentes - Complexidade: 2
   6.4 Próxima data de cobrança ❌ - Complexidade: 2
   6.5 Total gasto por plataforma ❌ - Complexidade: 3
      6.5.1 Lógica de soma por plataforma - Complexidade: 2
      6.5.2 Filtros por período - Complexidade: 1
      6.5.3 Ordenação por valor - Complexidade: 1

7. Análises e insights avançados ❌ - Complexidade: 10
   7.1 Evolução de gastos ❌ - Complexidade: 5
      7.1.1 Persistência de histórico de gastos - Complexidade: 2
      7.1.2 API para dados históricos - Complexidade: 2
      7.1.3 Agregação por período - Complexidade: 2
      7.1.4 Filtros (categoria/plataforma) - Complexidade: 1
   7.2 Comparativo mensal ❌ - Complexidade: 4
      7.2.1 Cálculo de variação percentual - Complexidade: 2
      7.2.2 Endpoint para consulta - Complexidade: 1
      7.2.3 Detalhamento por categoria - Complexidade: 2
   7.3 Análise de categorias em crescimento ❌ - Complexidade: 5
      7.3.1 Algoritmo para análise de tendências - Complexidade: 3
      7.3.2 Armazenamento de histórico por categoria - Complexidade: 2
   7.4 Previsão de gastos futuros ❌ - Complexidade: 8
      7.4.1 Algoritmo de previsão - Complexidade: 5
      7.4.2 Modelo para armazenar previsões - Complexidade: 2
      7.4.3 Job para atualização periódica - Complexidade: 2
      7.4.4 Comparativo previsão vs. realizado - Complexidade: 2

8. Sistema de alertas e otimizações ❌ - Complexidade: 10
   8.1 Alertas de assinaturas a vencer ❌ - Complexidade: 5
      8.1.1 Cálculo de datas próximas - Complexidade: 2
      8.1.2 API para consulta - Complexidade: 1
      8.1.3 Configuração de período de alerta - Complexidade: 2
   8.2 Detecção de mudança de preço ❌ - Complexidade: 5
      8.2.1 Algoritmo de comparação - Complexidade: 3
      8.2.2 Serviço de alerta - Complexidade: 2
      8.2.3 Estatísticas de alterações - Complexidade: 2
   8.3 Detecção de assinaturas não utilizadas ❌ - Complexidade: 8
      8.3.1 Modelo para registro de uso - Complexidade: 2
      8.3.2 API para marcação de uso - Complexidade: 2
      8.3.3 Lógica de análise de padrões - Complexidade: 5
   8.4 Cálculo de economia ❌ - Complexidade: 4
      8.4.1 Algoritmo para cálculos - Complexidade: 2
      8.4.2 Registro de assinaturas canceladas - Complexidade: 2
      8.4.3 API para dados de economia - Complexidade: 1
   8.5 Sugestões de otimização ❌ - Complexidade: 6
      8.5.1 Regras para identificação - Complexidade: 3
      8.5.2 Algoritmos de detecção - Complexidade: 3
      8.5.3 API para consulta e feedback - Complexidade: 2

#### Módulo de Notificações
9. Sistema de notificações unificado ❌ - Complexidade: 10
   9.1 Infraestrutura de notificações ❌ - Complexidade: 8
      9.1.1 Modelo de dados para notificações - Complexidade: 2
      9.1.2 Serviço de geração de notificações - Complexidade: 3
      9.1.3 API para consulta e gerenciamento - Complexidade: 2
      9.1.4 Serviço de distribuição por canais - Complexidade: 3
   9.2 Serviço de e-mails ❌ - Complexidade: 5
      9.2.1 Integração com serviço de envio - Complexidade: 3
      9.2.2 Templates transacionais - Complexidade: 2
      9.2.3 Sistema de filas para envio - Complexidade: 3
   9.3 Controle de frequência e configurações ❌ - Complexidade: 5
      9.3.1 Modelo para configurações por tipo - Complexidade: 2
      9.3.2 Regras de priorização - Complexidade: 3
      9.3.3 API para limites e frequência - Complexidade: 2
   
10. Tipos de notificações ❌ - Complexidade: 8
    10.1 Renovação próxima ❌ - Complexidade: 3
       10.1.1 Cálculo de datas - Complexidade: 2
       10.1.2 Agendamento - Complexidade: 2
    10.2 Assinatura renovada ❌ - Complexidade: 3
       10.2.1 Detector baseado em data - Complexidade: 2
       10.2.2 Confirmação de renovação - Complexidade: 1
    10.3 Aumento de preço ❌ - Complexidade: 4
       10.3.1 Comparação de preços - Complexidade: 2
       10.3.2 Definição de aumento significativo - Complexidade: 2
    10.4 Sugestões de economia ❌ - Complexidade: 5
       10.4.1 Análise periódica - Complexidade: 3
       10.4.2 Templates para diferentes tipos - Complexidade: 2
       10.4.3 API para feedback - Complexidade: 2

#### Infraestrutura e DevOps
11. Ambientes e Ferramentas ❌ - Complexidade: 10
    11.1 Ambiente de desenvolvimento ✅ - Complexidade: 3
    11.2 CI/CD básico ✅ - Complexidade: 8
        11.2.1 Pipeline de integração contínua ✅ - Complexidade: 3
        11.2.2 Testes automatizados básicos ✅ - Complexidade: 3
        11.2.3 Build automatizado ✅ - Complexidade: 2
        11.2.4 Deploy para homologação ✅ - Complexidade: 3
    11.3 Ambiente de homologação ❌ - Complexidade: 5
        11.3.1 Servidor de homologação - Complexidade: 2
        11.3.2 Banco de dados de teste - Complexidade: 2
        11.3.3 Processo de seed de dados - Complexidade: 2
    11.4 Ambiente de produção ❌ - Complexidade: 8
        11.4.1 Provedor de cloud - Complexidade: 2
        11.4.2 Infraestrutura como código - Complexidade: 3
        11.4.3 Balanceamento e alta disponibilidade - Complexidade: 5
        11.4.4 Certificados SSL e domínio - Complexidade: 2

12. Confiabilidade e Qualidade ❌ - Complexidade: 10
    12.1 Testes automatizados ❌ - Complexidade: 8
        12.3.1 Framework de testes unitários - Complexidade: 2
    12.2 Documentação API (Swagger) ✅ - Complexidade: 3

---

Documento criado em: [Data inicial]
Última atualização: 23/04/2025
Versão: 1.1 