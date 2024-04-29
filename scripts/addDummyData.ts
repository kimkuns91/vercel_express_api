import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.movie.create({
        data: {
            backdropPath: "/champpanda.webp",
            originalTitle: "ChampPanda",
            overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            posterPath: "/champpanda.jpeg",
            videoPath: "/champpanda.mp4",
            mediaType: "movie",
            adult: false,
            title: "챔프판다! 김건우 편",
            originalLanguage: "ko",
            genreIds: { set: [878, 12] },
            popularity: 1990.512,
            releaseDate: new Date("2024-04-29"),
            video: true,
            voteAverage: 8.263,
            voteCount: 3439
        }
    });

    console.log("Data added");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });