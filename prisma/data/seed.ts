import { CATEGORIES } from '@prisma/client';
import { prisma } from '../../src/shared/prisma.client';

async function main() {
  // STREAMING platforms
  const netflix = await prisma.platforms.create({
    data: {
      name: 'Netflix',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.netflix.com/br/',
    },
  });

  const disneyPlus = await prisma.platforms.create({
    data: {
      name: 'Disney+',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.disneyplus.com/pt-br',
    },
  });

  const amazonPrimeVideo = await prisma.platforms.create({
    data: {
      name: 'Amazon Prime Video',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.primevideo.com/br',
    },
  });

  const max = await prisma.platforms.create({
    data: {
      name: 'Max',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.max.com/br',
    },
  });

  const globoplay = await prisma.platforms.create({
    data: {
      name: 'Globoplay',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://globoplay.globo.com/',
    },
  });

  const paramountPlus = await prisma.platforms.create({
    data: {
      name: 'Paramount+',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.paramountplus.com/br/',
    },
  });

  const telecinePlay = await prisma.platforms.create({
    data: {
      name: 'Telecine Play',
      category: CATEGORIES.STREAMING,
      websiteUrl: 'https://www.telecineplay.com.br/',
    },
  });

  // MUSIC platforms
  const spotify = await prisma.platforms.create({
    data: {
      name: 'Spotify',
      category: CATEGORIES.MUSIC,
      websiteUrl: 'https://www.spotify.com/br/',
    },
  });

  const amazonMusic = await prisma.platforms.create({
    data: {
      name: 'Amazon Music',
      category: CATEGORIES.MUSIC,
      websiteUrl: 'https://music.amazon.com.br/',
    },
  });

  const deezer = await prisma.platforms.create({
    data: {
      name: 'Deezer',
      category: CATEGORIES.MUSIC,
      websiteUrl: 'https://www.deezer.com/br/',
    },
  });

  const youtubeMusic = await prisma.platforms.create({
    data: {
      name: 'YouTube Music',
      category: CATEGORIES.MUSIC,
      websiteUrl: 'https://music.youtube.com/',
    },
  });

  // GAMING platforms
  const xboxGamePass = await prisma.platforms.create({
    data: {
      name: 'Xbox Game Pass',
      category: CATEGORIES.GAMING,
      websiteUrl: 'https://www.xbox.com/pt-BR/xbox-game-pass',
    },
  });

  const playstationPlus = await prisma.platforms.create({
    data: {
      name: 'PlayStation Plus',
      category: CATEGORIES.GAMING,
      websiteUrl: 'https://www.playstation.com/pt-br/ps-plus/',
    },
  });

  // PRODUCTIVITY platforms
  const googleWorkspace = await prisma.platforms.create({
    data: {
      name: 'Google Workspace',
      category: CATEGORIES.PRODUCTIVITY,
      websiteUrl: 'https://workspace.google.com/intl/pt-BR/',
    },
  });

  const notion = await prisma.platforms.create({
    data: {
      name: 'Notion',
      category: CATEGORIES.PRODUCTIVITY,
      websiteUrl: 'https://www.notion.so/pt-br',
    },
  });

  // EDUCATION platforms
  const masterClass = await prisma.platforms.create({
    data: {
      name: 'MasterClass',
      category: CATEGORIES.EDUCATION,
      websiteUrl: 'https://www.masterclass.com/',
    },
  });

  const alura = await prisma.platforms.create({
    data: {
      name: 'Alura',
      category: CATEGORIES.EDUCATION,
      websiteUrl: 'https://www.alura.com.br/',
    },
  });

  // FITNESS platforms
  const gympass = await prisma.platforms.create({
    data: {
      name: 'Gympass',
      category: CATEGORIES.FITNESS,
      websiteUrl: 'https://www.gympass.com/br',
    },
  });

  const totalPass = await prisma.platforms.create({
    data: {
      name: 'Total Pass',
      category: CATEGORIES.FITNESS,
      websiteUrl: 'https://totalpass.com.br/',
    },
  });

  // NEWS platforms
  const newYorkTimes = await prisma.platforms.create({
    data: {
      name: 'The New York Times',
      category: CATEGORIES.NEWS,
      websiteUrl: 'https://www.nytimes.com/',
    },
  });

  // SECURITY platforms
  const nordVPN = await prisma.platforms.create({
    data: {
      name: 'NordVPN',
      category: CATEGORIES.SECURITY,
      websiteUrl: 'https://nordvpn.com/pt-br/',
    },
  });

  // INVESTMENT platforms
  const xpInvestimentos = await prisma.platforms.create({
    data: {
      name: 'XP Investimentos',
      category: CATEGORIES.INVESTMENT,
      websiteUrl: 'https://www.xpi.com.br/',
    },
  });

  // FOOD platforms
  const iFoodClub = await prisma.platforms.create({
    data: {
      name: 'iFood Club',
      category: CATEGORIES.FOOD,
      websiteUrl: 'https://www.ifood.com.br/clube-ifood',
    },
  });

  // ADULT platforms
  const onlyFans = await prisma.platforms.create({
    data: {
      name: 'OnlyFans',
      category: CATEGORIES.ADULT,
      websiteUrl: 'https://onlyfans.com/',
    },
  });

  // SOCIAL platforms
  const linkedInPremium = await prisma.platforms.create({
    data: {
      name: 'LinkedIn Premium',
      category: CATEGORIES.SOCIAL,
      websiteUrl:
        'https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text',
    },
  });

  // TRAVEL platforms
  const airbnbPlus = await prisma.platforms.create({
    data: {
      name: 'Airbnb Plus',
      category: CATEGORIES.TRAVEL,
      websiteUrl: 'https://www.airbnb.com.br/plus',
    },
  });

  // SHOPPING platforms
  const amazonPrime = await prisma.platforms.create({
    data: {
      name: 'Amazon Prime',
      category: CATEGORIES.SHOPPING,
      websiteUrl: 'https://www.amazon.com.br/prime',
    },
  });

  console.log('Dados de plataformas criados com sucesso');

  // Função auxiliar para criar registros de preços históricos
  const createPriceRecord = async (
    platformId: string,
    monthlyPrice: number,
    yearlyPrice: number,
    date: Date,
  ) => {
    await prisma.platforms_history_prices.create({
      data: {
        platformId,
        monthlyPrice: Math.round(monthlyPrice * 100),
        yearlyPrice: Math.round(yearlyPrice * 100),
        date,
      },
    });
  };

  // Netflix
  await createPriceRecord(netflix.id, 32.9, 329.9, new Date('2023-01-01'));
  await createPriceRecord(netflix.id, 34.9, 349.9, new Date('2023-06-01'));
  await createPriceRecord(netflix.id, 36.9, 369.9, new Date('2024-01-01'));

  // Disney+
  await createPriceRecord(disneyPlus.id, 27.9, 279.9, new Date('2023-01-01'));
  await createPriceRecord(disneyPlus.id, 29.9, 299.9, new Date('2023-06-01'));
  await createPriceRecord(disneyPlus.id, 32.9, 329.9, new Date('2024-01-01'));

  // Amazon Prime Video
  await createPriceRecord(
    amazonPrimeVideo.id,
    14.9,
    149.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    amazonPrimeVideo.id,
    16.9,
    169.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    amazonPrimeVideo.id,
    19.9,
    199.9,
    new Date('2024-01-01'),
  );

  // Max
  await createPriceRecord(max.id, 29.9, 299.9, new Date('2023-01-01'));
  await createPriceRecord(max.id, 32.9, 329.9, new Date('2023-06-01'));
  await createPriceRecord(max.id, 34.9, 349.9, new Date('2024-01-01'));

  // Globoplay
  await createPriceRecord(globoplay.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(globoplay.id, 22.9, 229.9, new Date('2023-06-01'));
  await createPriceRecord(globoplay.id, 24.9, 249.9, new Date('2024-01-01'));

  // Paramount+
  await createPriceRecord(
    paramountPlus.id,
    19.9,
    199.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    paramountPlus.id,
    22.9,
    229.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    paramountPlus.id,
    24.9,
    249.9,
    new Date('2024-01-01'),
  );

  // Telecine Play
  await createPriceRecord(telecinePlay.id, 29.9, 299.9, new Date('2023-01-01'));
  await createPriceRecord(telecinePlay.id, 32.9, 329.9, new Date('2023-06-01'));
  await createPriceRecord(telecinePlay.id, 34.9, 349.9, new Date('2024-01-01'));

  // Spotify
  await createPriceRecord(spotify.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(spotify.id, 21.9, 219.9, new Date('2023-06-01'));
  await createPriceRecord(spotify.id, 24.9, 249.9, new Date('2024-01-01'));

  // Amazon Music
  await createPriceRecord(amazonMusic.id, 16.9, 169.9, new Date('2023-01-01'));
  await createPriceRecord(amazonMusic.id, 19.9, 199.9, new Date('2023-06-01'));
  await createPriceRecord(amazonMusic.id, 21.9, 219.9, new Date('2024-01-01'));

  // Deezer
  await createPriceRecord(deezer.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(deezer.id, 21.9, 219.9, new Date('2023-06-01'));
  await createPriceRecord(deezer.id, 24.9, 249.9, new Date('2024-01-01'));

  // YouTube Music
  await createPriceRecord(youtubeMusic.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(youtubeMusic.id, 21.9, 219.9, new Date('2023-06-01'));
  await createPriceRecord(youtubeMusic.id, 24.9, 249.9, new Date('2024-01-01'));

  // Xbox Game Pass
  await createPriceRecord(xboxGamePass.id, 44.9, 449.9, new Date('2023-01-01'));
  await createPriceRecord(xboxGamePass.id, 49.9, 499.9, new Date('2023-06-01'));
  await createPriceRecord(xboxGamePass.id, 54.9, 549.9, new Date('2024-01-01'));

  // PlayStation Plus
  await createPriceRecord(
    playstationPlus.id,
    39.9,
    399.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    playstationPlus.id,
    44.9,
    449.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    playstationPlus.id,
    49.9,
    499.9,
    new Date('2024-01-01'),
  );

  // Google Workspace
  await createPriceRecord(
    googleWorkspace.id,
    6.9,
    69.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    googleWorkspace.id,
    7.9,
    79.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    googleWorkspace.id,
    8.9,
    89.9,
    new Date('2024-01-01'),
  );

  // Notion
  await createPriceRecord(notion.id, 9.9, 99.9, new Date('2023-01-01'));
  await createPriceRecord(notion.id, 10.9, 109.9, new Date('2023-06-01'));
  await createPriceRecord(notion.id, 11.9, 119.9, new Date('2024-01-01'));

  // MasterClass
  await createPriceRecord(masterClass.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(masterClass.id, 22.9, 229.9, new Date('2023-06-01'));
  await createPriceRecord(masterClass.id, 24.9, 249.9, new Date('2024-01-01'));

  // Alura
  await createPriceRecord(alura.id, 59.9, 599.9, new Date('2023-01-01'));
  await createPriceRecord(alura.id, 64.9, 649.9, new Date('2023-06-01'));
  await createPriceRecord(alura.id, 69.9, 699.9, new Date('2024-01-01'));

  // Gympass
  await createPriceRecord(gympass.id, 99.9, 999.9, new Date('2023-01-01'));
  await createPriceRecord(gympass.id, 109.9, 1099.9, new Date('2023-06-01'));
  await createPriceRecord(gympass.id, 119.9, 1199.9, new Date('2024-01-01'));

  // Total Pass
  await createPriceRecord(totalPass.id, 89.9, 899.9, new Date('2023-01-01'));
  await createPriceRecord(totalPass.id, 99.9, 999.9, new Date('2023-06-01'));
  await createPriceRecord(totalPass.id, 109.9, 1099.9, new Date('2024-01-01'));

  // The New York Times
  await createPriceRecord(newYorkTimes.id, 14.9, 149.9, new Date('2023-01-01'));
  await createPriceRecord(newYorkTimes.id, 16.9, 169.9, new Date('2023-06-01'));
  await createPriceRecord(newYorkTimes.id, 19.9, 199.9, new Date('2024-01-01'));

  // NordVPN
  await createPriceRecord(nordVPN.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(nordVPN.id, 22.9, 229.9, new Date('2023-06-01'));
  await createPriceRecord(nordVPN.id, 24.9, 249.9, new Date('2024-01-01'));

  // XP Investimentos
  await createPriceRecord(
    xpInvestimentos.id,
    9.9,
    99.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    xpInvestimentos.id,
    10.9,
    109.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    xpInvestimentos.id,
    11.9,
    119.9,
    new Date('2024-01-01'),
  );

  // iFood Club
  await createPriceRecord(iFoodClub.id, 9.9, 99.9, new Date('2023-01-01'));
  await createPriceRecord(iFoodClub.id, 10.9, 109.9, new Date('2023-06-01'));
  await createPriceRecord(iFoodClub.id, 11.9, 119.9, new Date('2024-01-01'));

  // OnlyFans
  await createPriceRecord(onlyFans.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(onlyFans.id, 22.9, 229.9, new Date('2023-06-01'));
  await createPriceRecord(onlyFans.id, 24.9, 249.9, new Date('2024-01-01'));

  // LinkedIn Premium
  await createPriceRecord(
    linkedInPremium.id,
    39.9,
    399.9,
    new Date('2023-01-01'),
  );
  await createPriceRecord(
    linkedInPremium.id,
    44.9,
    449.9,
    new Date('2023-06-01'),
  );
  await createPriceRecord(
    linkedInPremium.id,
    49.9,
    499.9,
    new Date('2024-01-01'),
  );

  // Airbnb Plus
  await createPriceRecord(airbnbPlus.id, 19.9, 199.9, new Date('2023-01-01'));
  await createPriceRecord(airbnbPlus.id, 22.9, 229.9, new Date('2023-06-01'));
  await createPriceRecord(airbnbPlus.id, 24.9, 249.9, new Date('2024-01-01'));

  // Amazon Prime
  await createPriceRecord(amazonPrime.id, 14.9, 149.9, new Date('2023-01-01'));
  await createPriceRecord(amazonPrime.id, 16.9, 169.9, new Date('2023-06-01'));
  await createPriceRecord(amazonPrime.id, 19.9, 199.9, new Date('2024-01-01'));

  console.log('Dados de preços históricos criados com sucesso');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
