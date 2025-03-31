const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const token = process.env.REACT_APP_GITHUB_TOKEN;

if (!token) {
  throw new Error(
    'Token do GitHub não encontrado! Verifique suas variáveis de ambiente.'
  );
}

interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
}

export const fetchPinnedRepos = async (
  username: string,
  itemCount: number = 6
): Promise<PinnedRepo[]> => {
  if (!username) {
    throw new Error('Nome de usuário não fornecido');
  }

  const query = `query {
    user(login: "${username}") {
      pinnedItems(first: ${itemCount}, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
          }
        }
      }
    }
  }`;

  const response = await fetch(GITHUB_GRAPHQL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios');
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(`Erro da API do GitHub: ${data.errors[0].message}`);
  }

  if (!data?.data?.user?.pinnedItems?.nodes) {
    throw new Error('Estrutura inesperada da resposta da API');
  }

  return data.data.user.pinnedItems.nodes as PinnedRepo[];
};
