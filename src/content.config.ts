// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file, glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        imagePath: z.string(),
        relatedPosts: z.array(z.string()).optional(),
        categories: z.array(z.string()).optional(),
    })
});

const proyectos = defineCollection({
    loader: file("./src/content/proyectos.json"),
    schema: z.object({
        "id": z.string(),
        "titulo": z.string(),
        "rol": z.string(),
        "tipo": z.string(),
        "programa": z.string(),
        "area": z.string(),
        "autor": z.string(),
        "año": z.number().int(),
        "institucion": z.string(),
        "observaciones": z.string().optional(),
        "url": z.string().url().optional(),
        "aprobado": z.boolean()
    })
});

const publicaciones = defineCollection({
    loader: file("./src/content/publicaciones.json"),
    schema: z.object({
        "id": z.string(),
        "title": z.string(),
        "url": z.string().url(),
        "published_date": z.string(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, proyectos, publicaciones };