import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { parseISO, format } from 'date-fns';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const getArticles = await fetch(`${process.env.CMS_API_URL}/posts`)
    const articles: any = await getArticles.json();

    // const fields: ISitemapField[] = articles.map((article) => ({
    //     loc: `${process.env.APP_URL}/artikel/${article.slug}`,
    //     lastmod: article.modified
    // }));

    const fields: ISitemapField[] = articles.map((article) => {
        const date = parseISO(article.modified);

        return {
            loc: `${process.env.APP_URL}/artikel/${article.slug}`,
            lastmod: format(date, 'yyyy-MM-dd')
        }
    });

    return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}