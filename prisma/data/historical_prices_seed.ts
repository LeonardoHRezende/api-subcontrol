import { prisma } from '../../src/shared/prisma.client';

async function main() {
  // Buscar todas as plataformas do banco de dados
  const platforms = await prisma.platforms.findMany();
  
  // Criar um mapa de nomes de plataformas para seus IDs
  const platformMap = new Map(
    platforms.map(platform => [platform.name, platform.id])
  );

  // Função auxiliar para criar registros de preços históricos
  const createPriceRecord = async (
    platformName: string,
    monthlyPrice: number,
    yearlyPrice: number,
    date: Date
  ) => {
    const platformId = platformMap.get(platformName);
    if (!platformId) {
      console.warn(`Plataforma ${platformName} não encontrada no banco de dados`);
      return;
    }

    await prisma.platforms_history_prices.create({
      data: {
        platformId,
        monthlyPrice,
        yearlyPrice,
        date,
      },
    });
  };

  // Netflix
  await createPriceRecord('Netflix', 32.90, 329.90, new Date('2023-01-01'));
  await createPriceRecord('Netflix', 34.90, 349.90, new Date('2023-06-01'));
  await createPriceRecord('Netflix', 36.90, 369.90, new Date('2024-01-01'));

  // Disney+
  await createPriceRecord('Disney+', 27.90, 279.90, new Date('2023-01-01'));
  await createPriceRecord('Disney+', 29.90, 299.90, new Date('2023-06-01'));
  await createPriceRecord('Disney+', 32.90, 329.90, new Date('2024-01-01'));

  // Amazon Prime Video
  await createPriceRecord('Amazon Prime Video', 14.90, 149.90, new Date('2023-01-01'));
  await createPriceRecord('Amazon Prime Video', 16.90, 169.90, new Date('2023-06-01'));
  await createPriceRecord('Amazon Prime Video', 19.90, 199.90, new Date('2024-01-01'));

  // Max
  await createPriceRecord('Max', 29.90, 299.90, new Date('2023-01-01'));
  await createPriceRecord('Max', 32.90, 329.90, new Date('2023-06-01'));
  await createPriceRecord('Max', 34.90, 349.90, new Date('2024-01-01'));

  // Globoplay
  await createPriceRecord('Globoplay', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('Globoplay', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('Globoplay', 24.90, 249.90, new Date('2024-01-01'));

  // Paramount+
  await createPriceRecord('Paramount+', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('Paramount+', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('Paramount+', 24.90, 249.90, new Date('2024-01-01'));

  // Telecine Play
  await createPriceRecord('Telecine Play', 29.90, 299.90, new Date('2023-01-01'));
  await createPriceRecord('Telecine Play', 32.90, 329.90, new Date('2023-06-01'));
  await createPriceRecord('Telecine Play', 34.90, 349.90, new Date('2024-01-01'));

  // Spotify
  await createPriceRecord('Spotify', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('Spotify', 21.90, 219.90, new Date('2023-06-01'));
  await createPriceRecord('Spotify', 24.90, 249.90, new Date('2024-01-01'));

  // Amazon Music
  await createPriceRecord('Amazon Music', 16.90, 169.90, new Date('2023-01-01'));
  await createPriceRecord('Amazon Music', 19.90, 199.90, new Date('2023-06-01'));
  await createPriceRecord('Amazon Music', 21.90, 219.90, new Date('2024-01-01'));

  // Deezer
  await createPriceRecord('Deezer', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('Deezer', 21.90, 219.90, new Date('2023-06-01'));
  await createPriceRecord('Deezer', 24.90, 249.90, new Date('2024-01-01'));

  // YouTube Music
  await createPriceRecord('YouTube Music', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('YouTube Music', 21.90, 219.90, new Date('2023-06-01'));
  await createPriceRecord('YouTube Music', 24.90, 249.90, new Date('2024-01-01'));

  // Xbox Game Pass
  await createPriceRecord('Xbox Game Pass', 44.90, 449.90, new Date('2023-01-01'));
  await createPriceRecord('Xbox Game Pass', 49.90, 499.90, new Date('2023-06-01'));
  await createPriceRecord('Xbox Game Pass', 54.90, 549.90, new Date('2024-01-01'));

  // PlayStation Plus
  await createPriceRecord('PlayStation Plus', 39.90, 399.90, new Date('2023-01-01'));
  await createPriceRecord('PlayStation Plus', 44.90, 449.90, new Date('2023-06-01'));
  await createPriceRecord('PlayStation Plus', 49.90, 499.90, new Date('2024-01-01'));

  // Google Workspace
  await createPriceRecord('Google Workspace', 6.90, 69.90, new Date('2023-01-01'));
  await createPriceRecord('Google Workspace', 7.90, 79.90, new Date('2023-06-01'));
  await createPriceRecord('Google Workspace', 8.90, 89.90, new Date('2024-01-01'));

  // Notion
  await createPriceRecord('Notion', 9.90, 99.90, new Date('2023-01-01'));
  await createPriceRecord('Notion', 10.90, 109.90, new Date('2023-06-01'));
  await createPriceRecord('Notion', 11.90, 119.90, new Date('2024-01-01'));

  // MasterClass
  await createPriceRecord('MasterClass', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('MasterClass', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('MasterClass', 24.90, 249.90, new Date('2024-01-01'));

  // Alura
  await createPriceRecord('Alura', 59.90, 599.90, new Date('2023-01-01'));
  await createPriceRecord('Alura', 64.90, 649.90, new Date('2023-06-01'));
  await createPriceRecord('Alura', 69.90, 699.90, new Date('2024-01-01'));

  // Gympass
  await createPriceRecord('Gympass', 99.90, 999.90, new Date('2023-01-01'));
  await createPriceRecord('Gympass', 109.90, 1099.90, new Date('2023-06-01'));
  await createPriceRecord('Gympass', 119.90, 1199.90, new Date('2024-01-01'));

  // Total Pass
  await createPriceRecord('Total Pass', 89.90, 899.90, new Date('2023-01-01'));
  await createPriceRecord('Total Pass', 99.90, 999.90, new Date('2023-06-01'));
  await createPriceRecord('Total Pass', 109.90, 1099.90, new Date('2024-01-01'));

  // The New York Times
  await createPriceRecord('The New York Times', 14.90, 149.90, new Date('2023-01-01'));
  await createPriceRecord('The New York Times', 16.90, 169.90, new Date('2023-06-01'));
  await createPriceRecord('The New York Times', 19.90, 199.90, new Date('2024-01-01'));

  // NordVPN
  await createPriceRecord('NordVPN', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('NordVPN', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('NordVPN', 24.90, 249.90, new Date('2024-01-01'));

  // XP Investimentos
  await createPriceRecord('XP Investimentos', 9.90, 99.90, new Date('2023-01-01'));
  await createPriceRecord('XP Investimentos', 10.90, 109.90, new Date('2023-06-01'));
  await createPriceRecord('XP Investimentos', 11.90, 119.90, new Date('2024-01-01'));

  // iFood Club
  await createPriceRecord('iFood Club', 9.90, 99.90, new Date('2023-01-01'));
  await createPriceRecord('iFood Club', 10.90, 109.90, new Date('2023-06-01'));
  await createPriceRecord('iFood Club', 11.90, 119.90, new Date('2024-01-01'));

  // OnlyFans
  await createPriceRecord('OnlyFans', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('OnlyFans', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('OnlyFans', 24.90, 249.90, new Date('2024-01-01'));

  // LinkedIn Premium
  await createPriceRecord('LinkedIn Premium', 39.90, 399.90, new Date('2023-01-01'));
  await createPriceRecord('LinkedIn Premium', 44.90, 449.90, new Date('2023-06-01'));
  await createPriceRecord('LinkedIn Premium', 49.90, 499.90, new Date('2024-01-01'));

  // Airbnb Plus
  await createPriceRecord('Airbnb Plus', 19.90, 199.90, new Date('2023-01-01'));
  await createPriceRecord('Airbnb Plus', 22.90, 229.90, new Date('2023-06-01'));
  await createPriceRecord('Airbnb Plus', 24.90, 249.90, new Date('2024-01-01'));

  // Amazon Prime
  await createPriceRecord('Amazon Prime', 14.90, 149.90, new Date('2023-01-01'));
  await createPriceRecord('Amazon Prime', 16.90, 169.90, new Date('2023-06-01'));
  await createPriceRecord('Amazon Prime', 19.90, 199.90, new Date('2024-01-01'));

  console.log('Dados de preços históricos criados com sucesso');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });