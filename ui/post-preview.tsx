import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '@/lib/interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, author, slug }: Props) => {
  return (
    <div className="max-w-md">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
