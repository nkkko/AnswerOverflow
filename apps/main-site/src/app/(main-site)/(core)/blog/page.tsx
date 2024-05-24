import { allBlogs } from '../../../../data/contentlayer';

import { Mdx } from '../../../_components/mdx-components';
import { BlueLink } from '@answeroverflow/ui/src/ui/blue-link';
import { sortContentByDateNewestFirst } from '../../../../utils/sort-content-by-date';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Blog - Answer Overflow',
	description:
		'Stay up to date about all of the changes and new updates being made to Answer Overflow',
};
export default function Page() {
	const sorted = sortContentByDateNewestFirst(allBlogs);
	return (
		<div>
			<div className={'border-b border-primary/[.3]'}>
				<h1 className={'text-5xl'}>Blog</h1>
				<p className={'py-4'}>
					Stay up to date about all of the changes and new updates being made to
					Answer Overflow
				</p>
			</div>
			<ul className={'divide-y divide-primary/[.3] py-4'}>
				{sorted.map((blog) => (
					<li key={blog.slug} className={'py-4'}>
						<BlueLink href={blog.slug}>
							<h2 className={'w-fit text-3xl'}>{blog.title}</h2>
						</BlueLink>
						<span className={'text-foreground/75'}>
							Posted{' '}
							{new Date(blog.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</span>
						<div className={'prose py-4 dark:prose-invert'}>
							<Mdx code={blog.body.code} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
