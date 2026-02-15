import { Helmet } from "react-helmet";

export default function PostLayout({ title, description, date, children }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Helmet>

      <h1 className="text-4xl font-bold leading-tight">{title}</h1>
      {date ? <p className="mt-2 text-sm opacity-70">{date}</p> : null}

      <article className="prose prose-neutral max-w-none mt-8">
        {children}
      </article>
    </div>
  );
}
