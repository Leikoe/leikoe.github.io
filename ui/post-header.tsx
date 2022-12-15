import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../lib/interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="bg-pink-100">
      <div className="e-container w-container justify-between gap-8 pt-24">
        {/* left text col */}
        <div className="flex basis-1/3 flex-col justify-center">
          <PostTitle>{title}</PostTitle>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          <DateFormatter dateString={date} />
        </div>

        {/* right img col */}
        <div className="max-h-[500px] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* <PostTitle>{title}</PostTitle>
        <div className="hidden md:mb-12 md:block">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PostHeader;
