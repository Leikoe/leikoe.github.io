import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMetadata }) {
  return (
    <div className="bg-theme-card border border-theme-border hover:border-theme-muted overflow-hidden transition-all">
      <div className="p-8">
        <div className="flex items-center mb-3">
          <time className="text-xs text-theme-muted">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <Link href={`/posts/${post.slug}`} className="block">
          <h2 className="text-xl font-normal mb-3 text-theme-heading hover:text-theme-link transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-theme-body mb-5 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link 
              key={tag} 
              href={`/tags/${tag}`} 
              className="text-xs bg-theme-tag text-theme-muted px-3 py-1 hover:bg-theme-tagHover transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}