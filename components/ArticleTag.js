import Link from "next/link"
import useTagNavigationStore from "../store/tagNavigation"

export default function ArticleTag(tags) {
    return (
        <div className="d-flex flex-wrap" style={{ gap: 3 }}>
            {
                tags.tags.map((v, i) => (
                    <Link 
                        href={`/artikel/tag/${v.slug}`}
                        onClick={() => useTagNavigationStore.setState({ 
                            tag: { 
                                id: v.id,
                                name: v.name, 
                                slug: v.slug 
                            } 
                        })} 
                        key={i}
                    >
                        <span className="badge rounded-pill text-bg-secondary">
                            {v.name}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}