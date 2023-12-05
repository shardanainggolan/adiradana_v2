import { ReactNode } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from 'next-seo';
import { FaChevronRight } from 'react-icons/fa'

// defining the Props
export type CrumbItem = {
    label: ReactNode;
    path: string;
};
export type BreadcrumbsProps = {
    items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	const itemListElements = items.map((crumb, i) => {
		i++

		return {
			position: i,
			name: crumb.label,
			item: `${process.env.APP_URL}${crumb.path}`
		}
	})

	return (
		<>
			{ itemListElements != null ? <BreadcrumbJsonLd itemListElements={itemListElements} /> : '' }
		
			<div className="d-flex justify-content-start align-items-center flex-wrap mb-3" style={{ gap: 5, fontSize: 14 }}>
				{
					items.map((crumb, i) => {
						const isLastItem = i === items.length - 1;
						
						// let div = '<div>'
						if (!isLastItem) {
							return (
								<div className="d-flex justify-content-start align-items-center" key={i} style={{ gap: 5, fontSize: 14 }}>
									<Link
										href={crumb.path}
										className="text-secondary"
									>
										{crumb.label}
									</Link>

									{/* separator */}
									<FaChevronRight style={{ fontSize: 12 }} /> 
								</div>
							);
						} else {
							// return crumb.label;
							return (
								<span className="text-dark">
									{crumb.label}
								</span>
							)
						}
					})
				}
			</div>
		</>
	);
  };
  
  export default Breadcrumbs;