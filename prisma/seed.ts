import { PrismaClient } from '@prisma/client'
import * as cream from '../src/data_eyeliner/data_cream.json'
import * as gel from '../src/data_eyeliner/data_gel.json'
import * as liquid from '../src/data_eyeliner/data_liquid.json'
import * as pancil from '../src/data_eyeliner/data_pancil.json'

const prisma = new PrismaClient()

async function seedData(c: any, id: number) {
  //category_id 4:liquid, 2:pancil, 1:gel, 3:cream
  const getProductData = (item: any) => {
    const { name, price, image_link } = item
    return {
      name,
      //   price,
      image_url: image_link,
      category_id: id,
    }
  }

  c.items?.map(async (item: any) => {
    const productData = getProductData(item)
    const res = await prisma.products.create({ data: productData })
    console.log(res)
  })

  //   for (const item of liquid) {
  //     const productData = getProductData(item)
  //     const res = await prisma.products.create({ data: productData })
  //     console.log(res)
  //   }
}
async function main() {
  //   await seedData(gel, 1)
  //   await seedData(pancil, 2)
  await seedData(cream, 3)
  //   await seedData()

  //   const arr = ['liquid', 'pancil', 'gel', 'cream']
  //   arr.forEach(async (e) => {
  //     await prisma.categories.create({
  //       data: {
  //         name: e,
  //       },
  //     })
  //   })

  //   const alice = await prisma.user.upsert({
  //     where: { email: 'alice@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'alice@prisma.io',
  //       name: 'Alice',
  //       posts: {
  //         create: {
  //           title: 'Check out Prisma with Next.js',
  //           content: 'https://www.prisma.io/nextjs',
  //           published: true,
  //         },
  //       },
  //     },
  //   })
  //   const bob = await prisma.user.upsert({
  //     where: { email: 'bob@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'bob@prisma.io',
  //       name: 'Bob',
  //       posts: {
  //         create: [
  //           {
  //             title: 'Follow Prisma on Twitter',
  //             content: 'https://twitter.com/prisma',
  //             published: true,
  //           },
  //           {
  //             title: 'Follow Nexus on Twitter',
  //             content: 'https://twitter.com/nexusgql',
  //             published: true,
  //           },
  //         ],
  //       },
  //     },
  //   })
  //   console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

//seed
//npx prisma db seed
