# EMPI Autocenter

Site institucional da oficina EMPI Autocenter, desenvolvido com **Next.js, React, TypeScript e Sass**. Apresenta os serviços de mecânica e elétrica automotiva, a estrutura da oficina e um caminho direto para solicitar atendimento pelo WhatsApp.

[Acessar o site](https://empi-red.vercel.app)

## O que o site apresenta

- Serviços de manutenção preventiva, freios, amortecedores e diagnóstico elétrico.
- Galeria com imagens da oficina e informações sobre o atendimento.
- Formulário com nome, telefone, veículo, serviço e observações.
- Links para WhatsApp, Instagram e localização.

O formulário valida os campos e prepara uma mensagem com os dados preenchidos. O envio final da mensagem acontece no WhatsApp.

## Implementação

| Parte | Como está organizada |
| --- | --- |
| Interface | Next.js 15, React 19 e TypeScript. |
| Estilos | Sass com CSS Modules e estilos globais. |
| Página inicial | `src/pages/index.tsx`, que renderiza `HomeTemplate`. |
| Composição | `HomeTemplate` reúne cabeçalho, apresentação, serviços, galeria, formulário e rodapé. |
| Interações | Estado local do React no formulário e `IntersectionObserver` nas animações de entrada. |

As animações de entrada incluem uma regra para `prefers-reduced-motion`, que exibe o conteúdo sem a transição.

## Organização do código

```text
src/
├── pages/          # Página inicial e configuração da aplicação
├── templates/      # Composição da página em HomeTemplate
├── components/     # Seções, formulário e elementos reutilizáveis
├── layouts/        # Layout compartilhado
└── assets/         # Estilos globais e fontes locais
public/
└── images/         # Imagens utilizadas nas seções
```

## Executar localmente

Na raiz do repositório:

```bash
npm install
npm run dev
```

Abra [localhost:3000](http://localhost:3000).

Para gerar e executar o build de produção:

```bash
npm run build
npm start
```

## Referências no código

- [Composição da página](src/templates/HomeTemplate/Index.tsx)
- [Formulário e mensagem para WhatsApp](src/components/AppointmentForm/Index.tsx)
- [Animações de entrada](src/components/ScrollReveal/Index.tsx)
- [Estilos das animações e movimento reduzido](src/components/ScrollReveal/styles.module.scss)

O [ERP EMPI](https://github.com/PedroHRFerreira/erp-empi) reúne o sistema de gestão da oficina em outro repositório.

## Licença

MIT
