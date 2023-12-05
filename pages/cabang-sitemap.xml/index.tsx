import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const getBranches = await fetch(`${process.env.BACKEND_URL}/api/branch`);
    const branches: any = await getBranches.json();

    const fields: ISitemapField[] = branches.data.map((branch) => ({
        loc: `${process.env.APP_URL}/cabang/${branch.slug}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}