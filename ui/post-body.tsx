type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div className="w-container e-container mt-20 pb-5 lg:max-w-2xl">
      <div
        className="prose prose-2xl prose-secondary dark:prose-invert lg:prose-base"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
